import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import Genres from './components/Genres';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Platform } from './hooks/useGames';
import { Genres as IGenres } from './hooks/useGenres';

export interface GameQuery {
  genre: IGenres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: IGenres) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSelectOrder = (order: string) => {
    setGameQuery({ ...gameQuery, sortOrder: order });
  };

  const handleSearch = (search: string) => {
    setGameQuery({ ...gameQuery, searchText: search });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav nav nav" "aside main main main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
      fontWeight="bold"
    >
      <GridItem p="2" area={'nav'}>
        <NavBar onSearch={handleSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={'aside'}>
          <Genres
            selectedGenre={gameQuery.genre}
            onSelectGenre={handleSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem p="2" area={'main'}>
        <GameHeading gameQuery={gameQuery} />
        <HStack>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={handleSelectPlatform}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectOrder={handleSelectOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
