import { GridItem, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { SimpleGrid, CardBody, Heading, Image } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = (props: Props) => {
  const { data, error, isLoading } = useGames(
    props.selectedGenre,
    props.selectedPlatform
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              {" "}
              <GameCardSkeleton key={s} />
            </GameCardContainer>
          ))}
        {data &&
          data.map((g) => (
            <GameCardContainer key={g.id}>
              <GameCard key={g.id} game={g}>
                {g.name}
              </GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
