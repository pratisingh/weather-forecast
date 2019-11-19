import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CityNameComponent } from './components/city/city-name.component';
import { SearchComponent } from "./components/search/search.component";

// DIRECTIVES
import { ClickOutsideDirective } from './components/search/click-outside.directive';


// PIPES
import { SearchFilterPipe } from './components/search/searchfilter-pipe';
import { LetterBoldPipe } from './components/search/letter-bold.pipe';

//SERVICE
import { SearchService } from './services/search.service';



@NgModule({
  declarations: [
    AppComponent,
    CityNameComponent,
    SearchComponent,
    ClickOutsideDirective,
    SearchFilterPipe,
    LetterBoldPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
