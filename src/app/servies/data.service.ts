/**
 * Copyright 2020 Vyasaka Technologies
 */

import { Injectable } from '@angular/core';
import { catchError, map, mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  vesselId = '';
  url = './assets/product-data.json';
  bannerUrl = './assets/banner-data.json';

  constructor(private restClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.restClient.get(`${this.url}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError(error => {
        return error;
      })
    );
  }

  getAllBanner(): Observable<any> {
    return this.restClient.get(`${this.bannerUrl}`).pipe(
      map((value: any) => {
        return value;
      }),
      catchError(error => {
        return error;
      })
    );
  }
}
