import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(public matdialog:MatDialogRef<MyAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public dialog: any) { }

  ngOnInit(): void {
  }

}
