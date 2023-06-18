import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatfomIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = (props: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(props.game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{props.game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={props.game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={props.game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
