import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'place-search-toolbar',
  styleUrls: ['place-search-toolbar.component.scss'],
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <form #form="ngForm" novalidate>
          <input
            name="text"
            type="text"
            placeholder="Input place name and hit"
            [(ngModel)]="text"
            required>

          <button
            mat-icon-button
            (click)="onClickSearch(form.value)"
            [disabled]="!form.valid">

            <mat-icon>search</mat-icon>
          </button>
        </form>
      </mat-toolbar-row>
    </mat-toolbar>
  `
})
export class PlaceSearchToolbarComponent {

  text = '';

  @Output()
  searchQuery: EventEmitter<string> = new EventEmitter<string>();

  onClickSearch(value): void {
    this.searchQuery.emit(value);
  }

}
