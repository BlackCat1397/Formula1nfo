import axios from 'axios';
import { useEffect, useState } from 'react';

async function fetchDrivers(page: number, rowsPerPage: number) {
  const offset = page * rowsPerPage;

  const response = await axios.get(
    `https://ergast.com/api/f1/drivers.json?limit=${rowsPerPage}&offset=${offset}`
  );

  const data: DriverResponse = response.data;

  return data.MRData;
}


export function useDrivers(page = 0, rowsPerPage = 15) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [drivers, setDrivers] = useState<DriverResponse['MRData']['DriverTable']['Drivers']>([]);
  const [totalDrivers, setTotalDrivers] = useState(0);

  const [retryFlag, setRetryFlag] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    fetchDrivers(page, rowsPerPage)
      .then((data) => {
        setDrivers(data.DriverTable.Drivers);
        setTotalDrivers(parseInt(data.total, 10));
      })
      .catch(err => {
        setIsError(true);
        console.error('Error fetching drivers:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, rowsPerPage, retryFlag]);

  return {
    retry: () => setRetryFlag(f => !f),
    drivers,
    isError,
    isLoading,
    totalDrivers,
  };
}
