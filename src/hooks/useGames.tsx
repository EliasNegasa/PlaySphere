import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: 0;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState<string>('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchGames = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get<FetchGamesResponse>('/games', {
          signal,
        });
        setGames(res.data.results);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        if (err instanceof Error) {
          setErrors(err.message);
          setLoading(false);
        }
      }
    };

    fetchGames();

    return () => controller.abort();
  }, []);

  return { games, errors, isLoading };
};

export default useGames;
