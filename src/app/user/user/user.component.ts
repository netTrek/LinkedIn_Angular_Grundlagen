import { AfterViewChecked, AfterViewInit, Component, DoCheck,
  OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'in-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit,
                                      DoCheck, AfterViewChecked,
                                      OnDestroy {
  constructor() { }

  ngOnInit() {
    console.log ( 'OnInit von User' );
  }

  ngAfterViewInit (): void {
    console.log ( 'AfterViewInit von User' );
  }

  ngDoCheck (): void {
    console.log ( 'DoCheck von User' );
  }

  ngAfterViewChecked (): void {
    console.log ( 'AfterViewChecked von User' );
  }

  ngOnDestroy (): void {
  console.log ( 'OnDestroy von User' );
  }
}
