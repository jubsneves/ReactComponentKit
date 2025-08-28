import React from "react";
import {
  HeroContentStyled,
  Shape,
  LeftSide,
  Heading,
  Image,
  Description,
} from "./styles/HeroContentStyled";

export default function HeroContent(props) {
  return (
    <HeroContentStyled>
      <LeftSide>
        <Heading>{props.content.title}</Heading>
        <Description>{props.content.description}</Description>
      </LeftSide>
      <Image src={props.content.img} />
      <Shape />
    </HeroContentStyled>
  );
}
