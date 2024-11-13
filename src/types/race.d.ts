interface RaceDetails {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: CircuitDetails;
  date: string;
  Results: RaceResult[];
}

interface CircuitDetails {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: CircuitLocation;
}

interface CircuitLocation {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

interface RaceResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
}


interface RacesResponse {
  MRData: {
    RaceTable: {
      driverId: string,
      Races: RaceDetails[],
    },
    total: string,
  }
}