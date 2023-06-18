import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatfomIconList";

interface Props {
  game: Game;
}

const GameCard = (props: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={props.game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
        <PlatformIconList
          platforms={props.game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
