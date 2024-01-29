import useGenres from '../hooks/useGenres';

const Genres = () => {
  const { genres, errors } = useGenres();
  return (
    <>
      {errors && <p>{errors}</p>}
      <ul>
        {genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
