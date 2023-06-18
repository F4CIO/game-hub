import { GridItem, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { SimpleGrid, CardBody, Heading, Image } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer>
              {" "}
              <GameCardSkeleton key={s} />
            </GameCardContainer>
          ))}
        {games &&
          games.map((g) => (
            <GameCard key={g.id} game={g}>
              {g.name}
            </GameCard>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
