import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = (props: Props) => {
  let color = props.score > 75 ? "green" : props.score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {props.score}
    </Badge>
  );
};

export default CriticScore;
