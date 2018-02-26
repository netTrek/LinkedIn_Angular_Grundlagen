import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in';
  showUserInfo = true;

  @HostListener ('window:resize', ['$event'])
  resize ( event: Event ) {
    console.log ( event );
  }
}
