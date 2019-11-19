import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityNameComponent } from './components/city/city-name.component';
import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
  {
    // Going to the app root will redirect to cities component
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'city-name/:name',
    component: CityNameComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
