import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatfomIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = (props: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(props.game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={props.game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={props.game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
