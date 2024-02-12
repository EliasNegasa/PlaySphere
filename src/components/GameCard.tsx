import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getOptimizedImage from '../utils/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
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
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading size="md">{game.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
