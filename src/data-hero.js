import hybrid1 from "./assets/hybrid1.png";
import mountain1 from "./assets/mountain1.png";
import folding1 from "./assets/folding1.png";

export const HERO_CONTENT = [
  {
    image: hybrid1,
    title: "Hybrid Bike",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: mountain1,
    title: "Mountain Bike",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: folding1,
    title: "Folding Bike",
    description:
      "Convenient and lightweight, perfect for commuting and urban riding.",
  },
];

export const EXAMPLES = {
  hybridBikes: {
    img: hybrid1,
    title: "Hybrid Bikes",
    description:
      "Ideal for commuting, leisure rides and adventures on off-road paths",
  },
  mountainBikes: {
    img: mountain1,
    title: "Mountain Bikes",
    description:
      "A high-performance electric mountain bike, perfect for off-road adventures",
  },
  foldingBikes: {
    img: folding1,
    title: "Folding Bikes",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
  },
};
