import genres from '../data/genres';

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, errors: null });

export default useGenres;
