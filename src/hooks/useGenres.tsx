import useData from './useData';

export interface Genres {
  name: string;
  slug: string;
}

const useGenres = () => useData<Genres>('/genres');

export default useGenres;
