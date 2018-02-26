import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log ( 'OnInit von UserName' );
  }

}
