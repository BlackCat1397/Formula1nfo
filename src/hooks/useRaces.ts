import axios from 'axios';
import { useEffect, useState } from 'react';

async function fetchRaces(driverId: string, page: number, rowsPerPage: number) {
  const offset = page * rowsPerPage;

  const response = await axios.get(
    `https://ergast.com/api/f1/drivers/${driverId}/results.json?limit=${rowsPerPage}&offset=${offset}`
  );

  const data: RacesResponse = response.data;

  return data.MRData;
}


export function useRaces(driverId: string, page = 0, rowsPerPage = 15) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [races, setRaces] = useState<RaceDetails[]>([]);
  const [total, setTotal] = useState(0);

  const [retryFlag, setRetryFlag] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    fetchRaces(driverId, page, rowsPerPage)
      .then((data) => {
        setRaces(data.RaceTable.Races);
        setTotal(parseInt(data.total, 10));
      })
      .catch(err => {
        setIsError(true);
        console.error('Error fetching races:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [driverId, page, rowsPerPage, retryFlag]);

  return {
    retry: () => setRetryFlag(f => !f),
    total,
    races,
    isError,
    isLoading,
  };
}
