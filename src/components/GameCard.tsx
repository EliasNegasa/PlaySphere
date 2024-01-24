import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getOptimizedImage from '../utils/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px">
      <CardBody>
        <Image
          src={getOptimizedImage(game.background_image)}
          alt={game.name}
          borderRadius="lg"
          objectFit="cover"
          height="200px"
          width="100%"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
