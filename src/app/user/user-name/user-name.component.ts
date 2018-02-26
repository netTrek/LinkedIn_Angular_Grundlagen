import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit {

  name               = 'Saban Ünlü';
  userNameStyleClass = 'user-name';

  get isAdminUser (): boolean {
    return this.name === 'Saban Ünlü';
  }
  constructor () {
  }

  ngOnInit () {
  }

  chgName () {
    if ( this.name !== 'Peter Müller' ) {
      this.name = 'Peter Müller';
    } else {
      this.name = 'Saban Ünlü';
    }
  }
}
