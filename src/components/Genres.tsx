import { HStack, Image, Stack, Text } from '@chakra-ui/react';
import useGenres, { Genres as IGenres } from '../hooks/useGenres';
import getOptimizedImage from '../utils/image-url';

interface Props {
  onSelectGenre: (genre: IGenres) => void;
  selectedGenre: IGenres | null;
}

const Genres = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, errors } = useGenres();

  return (
    <>
      {errors && <p>{errors}</p>}
      <Stack p="2">
        {data.map((genre) => (
          <HStack
            key={genre.slug}
            cursor="pointer"
            onClick={() => onSelectGenre(genre)}
          >
            <Image
              src={getOptimizedImage(genre.image_background)}
              alt={genre.name}
              borderRadius="lg"
              objectFit="cover"
              height="40px"
              width="40px"
            />
            <Text
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
            >
              {genre.name}
            </Text>
          </HStack>
        ))}
      </Stack>
    </>
  );
};

export default Genres;
