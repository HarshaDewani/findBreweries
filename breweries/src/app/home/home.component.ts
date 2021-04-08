import { Component, OnInit } from '@angular/core';
import { BreweriesData } from '../breweries-data.interface';
import { BreweriesServices } from '../services/breweries.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breweries: Array<BreweriesData>;
  url: string;
  private _jsonURL: string = 'assets/json/breweries-data.json';

  constructor(private breweriesService: BreweriesServices) { }

  ngOnInit(): void {
    this.breweriesService.getJSON(this._jsonURL).subscribe(breweries => {
      this.breweries = breweries;
    });
  }

  getGoogleMapsUrl(brewery: BreweriesData): string {
    if (!(brewery.street && brewery.city && brewery.state && brewery.country)) {
      return;
    }
    this.url = "https://www.google.com/maps/dir/" + " " + brewery.street + " " + brewery.city + " " + brewery.state + " " + brewery.country;
    
    return this.url;
  }
}
