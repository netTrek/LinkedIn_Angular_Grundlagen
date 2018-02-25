import { Component } from '@angular/core';

@Component ( {
  selector: 'in-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  constructor () {
    console.log ( 'Hello UserList' );
  }
}
