import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Location } from './locations/models/location';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
  const locations =[{
    "name": "1",
    "normalizedName": "1",
    "coordinates": {
      "latitudeInDegrees": 12.00000000,
      "longitudeInDegrees": 12.00000000
    },
    "address": {
      "city": "12",
      "country": "13",
      "continent": "AFRICA",
      "streetName": "12",
      "streetNumber": null,
      "postalCode": null,
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/288",
    "version": 5,
    "function": "AIRPORT"
  }, {
    "name": "1",
    "normalizedName": "1",
    "coordinates": {
      "latitudeInDegrees": 1.00000000,
      "longitudeInDegrees": 1.00000000
    },
    "address": {
      "city": "1",
      "country": "11",
      "continent": "AFRICA",
      "streetName": "11",
      "streetNumber": "11",
      "postalCode": "11",
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/289",
    "version": 0,
    "function": "SEAPORT"
  }, {
    "name": "1",
    "normalizedName": "1",
    "coordinates": {
      "latitudeInDegrees": 0E-8,
      "longitudeInDegrees": 11.00000000
    },
    "address": {
      "city": "11",
      "country": "11",
      "continent": "ANTARCTICA",
      "streetName": "11",
      "streetNumber": "11",
      "postalCode": "11",
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/290",
    "version": 0,
    "function": "AIRPORT"
  }, {
    "name": "1",
    "normalizedName": "1",
    "coordinates": {
      "latitudeInDegrees": 1.00000000,
      "longitudeInDegrees": 1.00000000
    },
    "address": {
      "city": "1",
      "country": "11",
      "continent": "AFRICA",
      "streetName": "1",
      "streetNumber": "1",
      "postalCode": "1",
      "administrativeLevel2": "1",
      "administrativeLevel1": "1"
    },
    "resourceId": "/tenant1/locations/293",
    "version": 0,
    "function": "AIRPORT"
  }, {
    "name": "1",
    "normalizedName": "2",
    "coordinates": {
      "latitudeInDegrees": 3.00000000,
      "longitudeInDegrees": 3.00000000
    },
    "address": {
      "city": "3",
      "country": "33",
      "continent": "ANTARCTICA",
      "streetName": "test",
      "streetNumber": null,
      "postalCode": null,
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/306",
    "version": 0,
    "function": "AIRPORT"
  }, {
    "name": "1",
    "normalizedName": "1",
    "coordinates": {
      "latitudeInDegrees": 1.00000000,
      "longitudeInDegrees": 1.00000000
    },
    "address": {
      "city": "1",
      "country": "11",
      "continent": "AFRICA",
      "streetName": "1",
      "streetNumber": null,
      "postalCode": null,
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/309",
    "version": 0,
    "function": "AIRPORT"
  }, {
    "name": "1",
    "normalizedName": "1",
    "coordinates": {
      "latitudeInDegrees": 1.00000000,
      "longitudeInDegrees": 1.00000000
    },
    "address": {
      "city": "1",
      "country": "11",
      "continent": "ANTARCTICA",
      "streetName": "1",
      "streetNumber": null,
      "postalCode": null,
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/311",
    "version": 0,
    "function": "AIRPORT"
  }, {
    "name": "11",
    "normalizedName": "11",
    "coordinates": {
      "latitudeInDegrees": 1.00000000,
      "longitudeInDegrees": 1.00000000
    },
    "address": {
      "city": "1",
      "country": "11",
      "continent": "ANTARCTICA",
      "streetName": "1",
      "streetNumber": null,
      "postalCode": null,
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/308",
    "version": 1,
    "function": "RAIL_TERMINAL"
  }, {
    "name": "1111",
    "normalizedName": "1111",
    "coordinates": {
      "latitudeInDegrees": 11.00000000,
      "longitudeInDegrees": 22.00000000
    },
    "address": {
      "city": "22",
      "country": "dd",
      "continent": "ANTARCTICA",
      "streetName": "22",
      "streetNumber": null,
      "postalCode": null,
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/320",
    "version": 3,
    "function": "RAIL_TERMINAL"
  }, {
    "name": "123",
    "normalizedName": "213",
    "coordinates": {
      "latitudeInDegrees": 12.00000000,
      "longitudeInDegrees": 12.00000000
    },
    "address": {
      "city": "11",
      "country": "11",
      "continent": "NORTH_AMERICA",
      "streetName": "11",
      "streetNumber": null,
      "postalCode": null,
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/312",
    "version": 1,
    "function": "AIRPORT"
  }, {
    "name": "123",
    "normalizedName": "3324",
    "coordinates": {
      "latitudeInDegrees": 1.00000000,
      "longitudeInDegrees": 1.00000000
    },
    "address": {
      "city": "11",
      "country": "11",
      "continent": "AFRICA",
      "streetName": "11",
      "streetNumber": null,
      "postalCode": null,
      "administrativeLevel2": null,
      "administrativeLevel1": null
    },
    "resourceId": "/tenant1/locations/316",
    "version": 0,
    "function": "RAIL_TERMINAL"
  }];
    // add property id

    const count=locations.length;
    for(let i=0 ; i<count;i++){
      locations[i]['id']=i;
    }

    return {locations};
  }
}
