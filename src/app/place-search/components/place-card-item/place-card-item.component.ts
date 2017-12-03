import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'place-card-item',
  styleUrls: ['place-card-item.component.scss'],
  template: `
    <mat-nav-list>
      <mat-list-item mat-button (click)="onDetail(place)" *ngFor="let place of places">
        <mat-icon mat-list-icon>location_on</mat-icon>
        <h4 mat-line>{{ place.terms[0].value }}</h4>
        <p mat-line> {{ place.description }} </p>
      </mat-list-item>
    </mat-nav-list>
  `
})
export class PlaceCardItemComponent {

  @Input()
  places: any;

  @Output()
  placeDetail: EventEmitter<any> = new EventEmitter<any>();

  onDetail(place: any): void {
    this.placeDetail.emit(place);
  }

}

// <mat-card *ngFor="let place of places">
// <mat-card-header>
//   <mat-card-title>{{ place.terms[0].value }}</mat-card-title>
//   <mat-card-subtitle>{{ place.description }}</mat-card-subtitle>
// </mat-card-header>
// <mat-card-actions>
//   <button mat-button (click)="onDetail(place)">DETAILS</button>
// </mat-card-actions>
// </mat-card>
