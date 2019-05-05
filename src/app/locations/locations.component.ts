import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import { catchError, map, tap } from 'rxjs/operators';
import {Location} from "./models/location";
import {Observable} from "rxjs";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
locations: Location[] = [];
// apiUrl='https://arviem-api.us-east-1.elasticbeanstalk.com/tenant1/locations';
  apiUrl='api/locations';
  constructor( private http: HttpClient){ }

  ngOnInit() {
    this.getLocations().subscribe((result: Location[])=>{
      this.locations=result;
    });
  }

  getLocations(): Observable<any>{
     return this.http.get(this.apiUrl);
 }

}
