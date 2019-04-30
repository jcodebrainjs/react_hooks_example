import React from "react";
import times from "lodash/times";
import { Container, Image } from "semantic-ui-react";
import { Store } from "../../modules/giphyCarousel";

const CarouselWithState = ({ state: { data, ndx } }) => {
  if (!data) {
    return null;
  }
  const imgs = times(data.length, i => (
    <Image
      key={i}
      width={data[i].images.original.width}
      height={data[i].images.original.height}
      src={data[i].images.original.url}
      hidden={i !== ndx}
    />
  ));
  return <Container className="carousel">{imgs}</Container>;
};

const Carousel = () => {
  const Giphy = Store.Store;
  return (
    <Giphy.Consumer>{value => <CarouselWithState {...value} />}</Giphy.Consumer>
  );
};

export default Carousel;
