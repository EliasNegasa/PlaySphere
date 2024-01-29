import useData from './useData';

export interface Genres {
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useData<Genres>('/genres');

export default useGenres;
