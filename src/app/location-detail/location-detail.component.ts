import { Component, OnInit, Input } from '@angular/core';
import { Location} from "../locations/models/location";
import { ActivatedRoute } from '@angular/router';
import { Location as Loc} from '@angular/common';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
// @Input() location: Location; // bindung oder route? geht beides
  apiUrl='api/locations';
  id: number;
  location: Location;
  constructor(private route: ActivatedRoute, private loc: Loc, private http: HttpClient) { }

   ngOnInit() {
    this.route.params.subscribe(async (params)=>{
      this.id=params.id;
      this.location=await this.getLocation().toPromise();
    })
  }
  getLocation(): Observable<Location> {
    return this.http.get<Location>(this.apiUrl+'/'+this.id)
  }

}
