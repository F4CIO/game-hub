import React from "react";
import bullsEye from "../assets/021126_0006_0004.wbc.jpg";
import thumbsUp from "../assets/1es.gif";
import meh from "../assets/46.gif";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = (props: Props) => {
  if (props.rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[props.rating]} boxSize="25px" />;
};

export default Emoji;
