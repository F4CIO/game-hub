import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let heading = "";
  if (gameQuery.platform?.name != null) {
    heading = heading + " " + gameQuery.platform?.name;
  }
  if (gameQuery.genre?.name != null) {
    heading = heading + " " + gameQuery?.genre?.name;
  }
  heading = heading + " Games";
  heading = heading.trim();

  return (
    <Heading marginBottom={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
