import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialogConfig, MatDialog} from '@angular/material/dialog';
import { MyAccountComponent } from 'src/app/common/my-account/my-account.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,DoCheck{
isLoggedin:any ='false'
  constructor( public router:Router,private dialog:MatDialog) { }
  ngDoCheck(): void {
    if(sessionStorage.getItem('isLoggedIn')=='true'){
      this.isLoggedin = sessionStorage.getItem('isLoggedIn')
    }
  }

  ngOnInit(): void {
   
    
    console.log('this.isloggedin:',this.isLoggedin)
  }
  onLoginClick(){
   
    this.dialog.open(LoginComponent);
  }
  onMyaccount(){
   this.router.navigateByUrl('/my_account') 
  }
}
