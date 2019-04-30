import React from "react";
import times from "lodash/times";
import { Container, Image } from "semantic-ui-react";

const Carousel = ({ list, ndx }) => {
  if (!list) {
    return null;
  }
  const imgs = times(list.length, i => (
    <Image
      key={i}
      width={list[i].images.original.width}
      height={list[i].images.original.height}
      src={list[i].images.original.url}
      hidden={i !== ndx}
    />
  ));
  return <Container className="carousel">{imgs}</Container>;
};

export default Carousel;
