import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, errors } = useGames();

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
