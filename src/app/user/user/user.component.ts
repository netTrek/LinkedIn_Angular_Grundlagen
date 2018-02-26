import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,AfterViewInit {


  constructor() { }

  ngOnInit() {
    console.log ( 'OnInit von User' );
  }

  ngAfterViewInit (): void {
    console.log ( 'AfterViewInit von User' );
  }
}
