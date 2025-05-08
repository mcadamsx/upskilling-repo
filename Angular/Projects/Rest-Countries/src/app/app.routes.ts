import { Routes } from '@angular/router';
import {CountriesComponent} from "./countries/countries.component";
import {CountryDetailsComponent} from "./country-details/country-details.component";

export const routes: Routes = [
  {
    path: "",
    component: CountriesComponent,
    title: "Home Page"
  },
  {
    path: 'details/: id',
    component: CountryDetailsComponent,
    title: "Details Page"
  }



];
