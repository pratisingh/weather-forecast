
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.css']
})
export class CityNameComponent {

    private apiCityUrl;
    dataCity: any = {};
    cityName: string;
    constructor(
        private http: HttpClient,
        private location: Location,
        private route: ActivatedRoute,
        private searchService: SearchService
    ) {
        console.log('Sad ce city name data ...');
       
        //this.getCityTest();
    }
    ngOnInit() {
        this.route.params.subscribe( params => {
            this.cityName = params['name'];
            this.getCityForecast(params['name']);
        } );
        if(this.searchService.cityName) {
            this.cityName = this.searchService.cityName
        }
        
    }

    getCityForecast(cityName) {
        this.searchService.getCityForecast(cityName).subscribe(dataCity => {
            console.log(dataCity);
            this.dataCity = dataCity;
        })
    }

   
    // Goind back to the previous page, goBack() called on click in the city component template
    goBack(): void {
        this.location.back();
    }

}


