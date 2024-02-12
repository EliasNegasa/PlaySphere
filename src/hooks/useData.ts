import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: object[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const { signal } = controller;

      const fetchData = async () => {
        try {
          setLoading(true);
          const res = await apiClient.get<FetchResponse<T>>(endpoint, {
            signal,
            ...requestConfig,
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : []
  );
  return { data, errors, isLoading };
};

export default useData;
