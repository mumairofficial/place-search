import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { PlaceSearchComponent } from './containers/place-search/place-search.component';
import { PlaceDetailComponent } from './containers/place-detail/place-detail.component';

// components
import { PlaceSearchToolbarComponent } from './components/place-search-toolbar/place-search-toolbar.component';
import { PlaceCardItemComponent } from './components/place-card-item/place-card-item.component';
import { PlaceDetailToolbarComponent } from './components/place-detail-toolbar/place-detail-toolbar.component';

// services
import { PlaceSearchService } from './place-search.service';

// shared
import { MaterialModule } from '../core/material.module';

// 3rd party
import { AgmCoreModule } from '@agm/core';

// app config
import { AppConfig } from '../../config';

const routes: Routes = [
  {
    path: 'places',
    children: [
      { path: '', component: PlaceSearchComponent },
      { path: ':id', component: PlaceDetailComponent }
    ]
  }
];

const API_KEY = AppConfig.API_KEY;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({ apiKey: API_KEY })
  ],
  providers: [PlaceSearchService],
  declarations: [
    PlaceSearchComponent,
    PlaceDetailComponent,
    PlaceSearchToolbarComponent,
    PlaceCardItemComponent,
    PlaceDetailToolbarComponent
  ]
})
export class PlaceSearchModule {}
