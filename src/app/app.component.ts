import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <common-toolbar></common-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
