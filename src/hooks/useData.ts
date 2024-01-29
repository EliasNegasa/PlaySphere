import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal,
        });
        setData(res.data.results);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        if (err instanceof Error) {
          setErrors(err.message);
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => controller.abort();
  }, []);
  return { data, errors, isLoading };
};

export default useData;
