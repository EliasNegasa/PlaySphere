import useGenres from '../hooks/useGenres';

const Genres = () => {
  const { data, errors } = useGenres();
  return (
    <>
      {errors && <p>{errors}</p>}
      <ul>
        {data.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
