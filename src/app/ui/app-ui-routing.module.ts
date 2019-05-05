import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationsComponent} from "../locations/locations.component";
import {LocationDetailComponent} from "../location-detail/location-detail.component";

const routes: Routes = [{path: 'locations', component: LocationsComponent},{path: 'detail/:id', component: LocationDetailComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppUIRoutingModule { }
