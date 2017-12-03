import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppConfig } from '../../config';

const API_KEY = AppConfig.API_KEY;
const apiBaseUrl = 'https://maps.googleapis.com/maps/api/place';

@Injectable()
export class PlaceSearchService {
  constructor(private http: Http) {}

  find(query): Observable<any> {
    return this.http
      .get(
        `${apiBaseUrl}/autocomplete/json?input=${query}&key=${API_KEY}`,
        this.requestOptions()
      )
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  detailOf(placeId: string): Observable<any> {
    return this.http
      .get(
        `${apiBaseUrl}/details/json?placeid=${placeId}&key=${API_KEY}`,
        this.requestOptions()
      )
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  private requestOptions(): RequestOptions {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const headerOptions = new RequestOptions();
    headerOptions.headers = header;

    return headerOptions;
  }
}
