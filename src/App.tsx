import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import Genres from './components/Genres';

function App() {
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={'aside'}>
          <Genres />
        </GridItem>
      </Show>
      <GridItem p="2" area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
