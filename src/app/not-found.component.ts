import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  styles: [`
    h3 {
      font-size: 36px;
      font-weight: 300;
      text-align: center;
      margin: 36vh auto;
    }
  `],
  template: `
    <h3>
      Oops cannot found what you are looking for,
      <a [routerLink]="places">HOME</a>!
    </h3>
  `
})
export class NotFoundComponent {

  places = '/places';

}
