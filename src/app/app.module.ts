import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// module
import { PlaceSearchModule } from './place-search/place-search.module';
import { MaterialModule } from './core/material.module';

import { CommonToolbarComponent } from './core/components/common-toolbar/common-toolbar.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, CommonToolbarComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    PlaceSearchModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
