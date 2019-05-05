import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppUIRoutingModule } from './app-ui-routing.module';
import {LocationsComponent} from "../locations/locations.component";
import {LocationDetailComponent} from "../location-detail/location-detail.component";
@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, LocationsComponent, LocationDetailComponent],
  imports: [CommonModule, AppUIRoutingModule, FormsModule, HttpClientModule,HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  )],
  exports:[LayoutComponent]
})
export class UiModule { }
