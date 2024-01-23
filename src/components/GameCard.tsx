import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <CardBody>
        <Image
          src={game.background_image}
          alt={game.name}
          borderRadius="lg"
          objectFit="cover"
          height='200px'
          width='100%'
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <Text>
            This game is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
