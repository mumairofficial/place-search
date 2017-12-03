import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PlaceSearchService } from '../../place-search.service';

@Component({
  selector: 'place-search',
  styleUrls: ['place-search.component.scss'],
  template: `
    <place-search-toolbar
      (searchQuery)="handleSearchQuery($event)">
    </place-search-toolbar>
    <mat-progress-bar *ngIf="searchQuery && isSearching" mode="query"></mat-progress-bar>
    <div class="search-results-container">

      <div class="helping-text" *ngIf="searchQuery && !isSearching">Search query {{ searchQuery }} ...</div>

      <place-card-item
        *ngIf="foundPlaces.length && !isSearching"
        [places]="foundPlaces"
        (placeDetail)="handlePlaceDetail($event)">

      </place-card-item>

      <div class="helping-text" *ngIf="isSearching">searching</div>

      <div class="helping-text" *ngIf="foundPlaces.length === 0 && !isSearching">
        oops no location found, type place name in search box
      </div>
    </div>
  `
})
export class PlaceSearchComponent {
  searchQuery = '';
  isSearching = false;

  foundPlaces: any = [];

  constructor(private placeSearch: PlaceSearchService, private router: Router) {}

  handleSearchQuery(value): void {
    this.searchQuery = value.text;
    this.isSearching = true;

    this.placeSearch.find(value.text).subscribe(
      data => {
        this.foundPlaces = data.predictions;
      },
      error => {
        console.log(error);
      },
      () => (this.isSearching = false)
    );
  }

  handlePlaceDetail(place: any): void {
    this.router.navigate(['/places', place.place_id]);
  }
}
