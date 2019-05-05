export class Location
{ id: number;
  name: string;
  normalizedName: string;
  coordinates: {
    latitudeInDegrees: number;
    longitudeInDegrees: number
  };
  address: {
    city: string
    country: string;
    continent: string;
    streetName: string;
    streetNumber: string;
    postalCode: string;
    administrativeLevel2: string;
    administrativeLevel1: string
  };
  resourceId: string;
  version: string;
  function:string;
}
