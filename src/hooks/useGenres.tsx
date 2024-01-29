import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genres {
  name: string;
  slug: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [errors, setErrors] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchGenres = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get<FetchGenresResponse>('/genres', {
          signal,
        });
        setGenres(res.data.results);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        if (err instanceof Error) {
          setErrors(err.message);
          setLoading(false);
        }
      }
    };
    fetchGenres();

    return () => controller.abort();
  }, []);
  return { genres, errors, isLoading };
};

export default useGenres;
