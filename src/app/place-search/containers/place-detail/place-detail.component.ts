import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PlaceSearchService } from '../../place-search.service';

import 'rxjs/add/operator/switchMap';

// place_id = ChIJ2QeB5YMEGTkRYiR-zGy-OsI

@Component({
  selector: 'place-detail',
  styleUrls: ['place-detail.component.scss'],
  template: `
    <place-detail-toolbar
      (back)="handleGoBack($event)">
      </place-detail-toolbar>

    <mat-progress-bar *ngIf="isLoading" mode="indeterminate"></mat-progress-bar>

    <div class="place-detail-container" *ngIf="!isLoading && place?.name">
      <h3 class="info-title">{{ place?.name }}</h3>
      <small>{{ place?.formatted_address }}</small>

      <h5 class="info-title">Types</h5>
      <mat-chip-list>
        <mat-chip *ngFor="let type of place?.types">{{ type }}</mat-chip>
      </mat-chip-list>

      <h5 class="info-title">Location on map</h5>
      <agm-map
        [latitude]="coords?.lat"
        [longitude]="coords?.lng"
        [zoom]="zoom"
        [disableDefaultUI]="false">

      <agm-marker
        [latitude]="coords?.lat"
        [longitude]="coords?.lng">
      </agm-marker>

      </agm-map>

      <span>cool things are coming soon :-)</span>

    </div>
  `
})
export class PlaceDetailComponent {
  place: any = {};
  zoom = 20;

  coords: any = {};

  isLoading = false;

  constructor(
    private placeService: PlaceSearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLoading = true;
    this.route.params
      .switchMap(data => this.placeService.detailOf(data.id))
      .subscribe(response => {
        this.place = response.result;
        this.isLoading = false;
        console.log(this.place);
        this.coords = this.place.geometry.location;

        console.log(this.coords);
      });
  }

  handleGoBack(event): void {
    this.router.navigateByUrl('places');
  }
}

// <agm-map
// [latitude]="place?.geometry.location.lat"
// [longitude]="place?.geometry.location.lon">

// <agm-marker
//   [latitude]="place?.geometry.location.lat"
//   [longitude]="place?.geometry.location.lon">
// </agm-marker>

// </agm-map>
