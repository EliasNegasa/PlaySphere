import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: 0;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>('/games', {
          signal,
        });
        setGames(res.data.results);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      }
    };

    fetchGames();

    return () => controller.abort();
  }, []);

  return { games, errors, setGames, setErrors };
};

export default useGames;
