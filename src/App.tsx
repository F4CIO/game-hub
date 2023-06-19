import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Ordering, Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: Ordering | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"', //basic layout
        lg: '"nav nav" "aside main"', //large devices
      }}
      templateColumns={{
        base: "1fr", //basic layout   ,1fr means take all available space
        lg: "200px 1fr", //large devices
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(st) => setGameQuery({ ...gameQuery, searchText: st })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList
            onSelectGenre={(g) => setGameQuery({ ...gameQuery, genre: g })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(p) =>
              setGameQuery({ ...gameQuery, platform: p })
            }
            selectedPlatform={gameQuery.platform}
          ></PlatformSelector>
          <SortSelector
            onSelectOrdering={(o) =>
              setGameQuery({ ...gameQuery, ordering: o })
            }
            selectedOrdering={gameQuery.ordering}
          ></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
