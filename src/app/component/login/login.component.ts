import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm ! : FormGroup;
  myFormObj = {email:'', password:''}
  isLoggedIn: boolean = false
  constructor( private fb:FormBuilder,public matdialog:MatDialogRef<LoginComponent>, ) { }

  ngOnInit(): void {
    this.myLoginForm()
  }
myLoginForm(){
  this.LoginForm = this.fb.group({
    email : ["",[Validators.required,Validators.email]],
    password : ["",[Validators.required,Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),]]
  })
}  
onLoginFormClick(){
  this.myFormObj = this.LoginForm.value
  console.log(this.myFormObj.email)
  if(this.LoginForm.valid){
    window.sessionStorage.setItem('isLoggedIn','true')

  }
this.matdialog.close()
}
}
