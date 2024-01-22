import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: 0;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState<string>('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>('/games');
        setGames(res.data.results);
      } catch (err) {
        setErrors(err.message);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      {errors && <p>{errors}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
