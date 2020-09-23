import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required)
    })
  }

  onSubmit(): void{
    let user: User = {
      name: "",
      username: this.form.value.user,
      password: this.form.value.password
    };
    console.log(this.form.value);
    this.userService.verifyUserCredentials(user).subscribe((status: boolean) => {
      if(status) {
        this.router.navigate(['/channels']);
      }
      else {
        alert("Incorrect username or password");
      }
    }, err => {
      alert("Incorrect username or password");
    });
  }

}
