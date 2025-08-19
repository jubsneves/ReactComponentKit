import React from "react";
import { HeroContentStyled } from "./styles/HeroContentStyled";

export default function HeroContent({label}) {
    return <HeroContentStyled>{label}</HeroContentStyled>;
}