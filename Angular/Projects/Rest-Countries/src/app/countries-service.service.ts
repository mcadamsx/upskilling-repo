import { Injectable } from '@angular/core';
import {environment} from "../environments/environment.development";
import { CountriesType } from './countries-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesServiceService {
  protected countriesList: any[] = [];

  constructor(private http: HttpClient) {}

  getAllCountries(): CountriesType[] {
    this.http.get<any[]>(`${environment.endPoint}/countries`).subscribe((data) => {
      this.countriesList = data;
      console.log(this.countriesList);
    });
    return this.countriesList;
  }


  getCountriesById(id: number): CountriesType | undefined {
    return this.countriesList.find((countries) => countries.id === id);
  }
}

