import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = (props: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {props.children}
    </Box>
  );
};

export default GameCardContainer;
