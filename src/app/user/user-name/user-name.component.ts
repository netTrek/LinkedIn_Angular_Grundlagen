import { Component,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges } from '@angular/core';

@Component ( {
  selector   : 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit, OnChanges {

  get name (): string {
    return this._name;
  }
  @Input ()
  set name ( value: string ) {
    if ( value.trim() !== '' ) {
      this._name = value;
    }
  }

  @Input()
  city: string;

  userNameStyleClass = 'user-name';

  private _name                = 'Saban Ünlü';

  @HostBinding ( 'class.user-name' )
  isAdminUser = false;

  constructor () {
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    console.log ( changes );
  }

  ngOnInit () {
  }

  @HostListener ( 'click', [ '$event',
                             '_name'
  ] )
  chgName ( event: MouseEvent, name: string ) {
    console.log ( event, name );
    if ( this._name !== 'Peter Müller' ) {
      this._name       = 'Peter Müller';
      this.isAdminUser = false;
    } else {
      this._name       = 'Saban Ünlü';
      this.isAdminUser = true;
    }
  }
}
