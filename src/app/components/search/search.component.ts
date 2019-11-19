
import { Component } from "@angular/core";
import { SearchService } from "../../services/search.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    searchCity: any;

    cityNameValue = '';

    constructor(
        private router: Router, private searchService: SearchService
    ) { }

    ngOnInit() {
        this.getCityList();
    }
    onEnter(value: string) {
        this.cityNameValue = value;
        this.searchService.cityName = this.cityNameValue;
        console.log(this.cityNameValue);
        this.router.navigate(['./city-name/' + this.cityNameValue]);
    }




    getCityList() {

        this.searchService.getCity()
            .subscribe((data) => {
                this.searchCity = data.result;

            });
    }
}