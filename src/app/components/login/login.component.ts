import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required)
    })
  }

  onSubmit(): void{
    console.log(this.form);
    this.router.navigate(['/channels']);
  }

}
