interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  permanentNumber: string;
  url?: string;
}

interface DriverResponse {
  MRData: {
    DriverTable: {
      Drivers: Driver[];
    };
    total: string;
  };
}
