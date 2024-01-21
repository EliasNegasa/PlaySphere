import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "nav main"`,
      }}
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={'header'}>
        Header
      </GridItem>
      <Show above='lg'>
        <GridItem pl="2" bg="pink.300" area={'nav'}>
          Nav
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={'main'}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
