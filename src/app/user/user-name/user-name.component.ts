import {
  Component, EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';

@Component ( {
  selector   : 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit, OnChanges {

  @Output()
  nameChanged: EventEmitter<string> = new EventEmitter();

  get name (): string {
    return this._name;
  }
  @Input ()
  set name ( value: string ) {
    if ( value.trim() !== '' ) {
      this._name = value;
      this.isAdminUser = this._name === 'Saban Ünlü'
    }
  }
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
    if ( this._name !== 'Peter Müller' ) {
      this.name       = 'Peter Müller';
    } else {
      this.name       = 'Saban Ünlü';
    }
    this.nameChanged.emit( this.name );
  }
}
