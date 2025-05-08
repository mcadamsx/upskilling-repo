import { Component, inject } from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { CommonModule } from '@angular/common';
import { CountriesType } from '../countries-type';
import { CountriesServiceService } from '../countries-service.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [ CommonModule,CountryComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countryList: CountriesType[] = [];
  countryService: CountriesServiceService = inject (CountriesServiceService);
  filteredCountriesList: CountriesType[] = [];
  constructor(){
    this.countryList = this.countryService.getAllCountries();
    this.filteredCountriesList = this.countryList
  }
  filterResults(text: string){
    if (!text){
      this.filteredCountriesList = this.countryList;
    }
    this.filteredCountriesList = this.countryList.filter((country) =>
    country?.name.toLowerCase().includes(text.toLowerCase())
    )
  }

}
