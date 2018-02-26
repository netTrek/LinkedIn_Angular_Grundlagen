import {
  Component, DoCheck,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component ( {
  selector: 'in-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserListComponent implements OnInit, DoCheck{

  constructor () {
    console.log ( 'constructor von UserList' );
  }

  ngOnInit (): void {
    console.log ( 'OnInit von UserList' );
  }

  ngDoCheck (): void {
    console.log ( 'DoCheck von UserList' );
  }
}
