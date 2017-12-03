import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'place-detail-toolbar',
  styleUrls: ['place-detail-toolbar.component.scss'],
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
      <button
        mat-icon-button
        (click)="goBack()">

        <mat-icon matTooltip="Go back">arrow_back</mat-icon>

      </button>

        <span>Place details</span>

      </mat-toolbar-row>
    </mat-toolbar>
  `
})
export class PlaceDetailToolbarComponent {

  @Output()
  back: EventEmitter<any> = new EventEmitter<any>();

  goBack(): void {
    this.back.emit({navigateBack: true});
  }

}
