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
        <Heading>{props.data.title}</Heading>
        <Description>{props.data.description}</Description>
      </LeftSide>
      <Image src={props.data.img} />
      <Shape />
    </HeroContentStyled>
  );
}
