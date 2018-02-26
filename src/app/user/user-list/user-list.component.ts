import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit{

  user1 = 'Frank Müller';
  user2 = 'Peter Mustermann';
  user3 = 'Saban Ünlü';

  crrUsr3Name: string;

  constructor() { }
  ngOnInit() {  }

  onNameChanged ( newName: string ) {
    // console.log ( 'newName', newName );
    this.crrUsr3Name = newName;
  }
}
