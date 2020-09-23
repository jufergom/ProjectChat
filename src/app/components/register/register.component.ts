import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("",Validators.required),
      username: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
      confirmPassword: new FormControl("",Validators.required)
    })
  }

  onSubmit(): void {
    let formValue = this.form.value;
    if(formValue.password == formValue.confirmPassword) {
      let user: User = {
        name: formValue.name,
        username: formValue.username,
        password: formValue.password
      };
      this.userService.addUser(user).subscribe(res => {
        if(formValue)
        alert(`Created new user ${user.username}`);
      }, err => {
        alert(`User ${user.username} already exist`);
      });
    }
    else {
      alert("The passwords you entered did not match");
    }
  }


}
