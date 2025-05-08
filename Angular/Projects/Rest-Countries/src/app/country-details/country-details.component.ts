import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CountriesComponent} from "../countries/countries.component";

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule,RouterModule, CountriesComponent],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  countriesId = 0;

  constructor() {
    this.countriesId = (this.route.snapshot.params['id'])
  }

}
