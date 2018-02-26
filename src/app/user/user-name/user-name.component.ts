import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {
  get name (): string {
    return this._name; // `Herr ${this._name}`;
  }

  set name ( value: string ) {
    this._name = value;
  }

  private _name = 'Saban Ünlü';

  constructor() { }
  ngOnInit() {  }

  getName (): string {
    console.log ( 'return name' , this.name );
    return this._name;
  }

}
