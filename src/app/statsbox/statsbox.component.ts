import { Component, OnChanges, Input } from '@angular/core';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-statsbox',
  templateUrl: './statsbox.component.html',
  styleUrls: ['./statsbox.component.css']
})

export class StatsboxComponent implements OnChanges {
@Input() countryName: string | null = '';
  countryData: any;

  country = {
    name: '',
    capital: '',
    region: '',
    income: '',
    lat: '',
    long: ''
  }

  constructor(private _webapiservice: WebApiService) {
  }
  
  ngOnChanges() {
    //console.log(this.countryName)
    //this.sendCountryName(this.countryName);
    this.fetchCountry(this.countryName)
  }

  //test to make sure that statsbox sends data to service
  /*
  sendCountryName(value: string | null) {
    this._webapiservice.setCountryName(value);
  }
  */

  fetchCountry(country: string | null) {
    this._webapiservice.getCountry(country).subscribe(data => {
      console.log(data[1][0]['incomeLevel']['value']);
      this.country.name = data[1][0]['name'];
      this.country.capital = data[1][0]['capitalCity'];
      this.country.region = data[1][0]['region']['value'];
      this.country.income = data[1][0]['incomeLevel']['value'];
      this.country.lat = data[1][0]['latitude'];
      this.country.long = data[1][0]['longitude'];
    })
  }
}

