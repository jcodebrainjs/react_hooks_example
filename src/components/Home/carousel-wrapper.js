import React from "react";
import { Icon, Grid } from "semantic-ui-react";
import Carousel from "./carousel";
import { increment, decrement } from "../../data/shift-indx";

const CarouselWrapper = ({ list, ndx, dispatch }) => (
  <Grid className='carousel-wrapper'>
    <Grid.Column id="left" className='arrow-button' onClick={decrement(dispatch)} width={1} verticalAlign="middle">
      <Icon name="arrow circle left" size="large" />
    </Grid.Column>
    <Grid.Column width={14}>
      <Carousel list={list} ndx={ndx} />
    </Grid.Column>
    <Grid.Column id="right" className='arrow-button' onClick={increment(dispatch)} width={1} verticalAlign="middle">
      <Icon name="arrow circle right" size="large" />
    </Grid.Column>
  </Grid>
);

export default CarouselWrapper;
