import { Card, CardBody, Heading, Image, Stack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image
          src={game.background_image}
          alt={game.name}
          borderRadius="lg"
          objectFit="cover"
          height="200px"
          width="100%"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
