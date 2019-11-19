
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SearchService {
    cityName: string;

    constructor(private http: HttpClient) { }

   

    getCity(): Observable<any> {
        return this.http.get('/assets/city.list.json');
    }
    getCityForecast(cityName) {
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=110ff02ed24ccd819801248373c3b208');
        
    }
}