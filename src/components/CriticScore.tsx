import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 85 ? 'green' : score >= 75 ? 'yellow' : 'red';
  return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
