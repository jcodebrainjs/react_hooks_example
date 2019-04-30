import React from "react";
import { Icon, Grid } from "semantic-ui-react";
import Carousel from "./carousel";
import Store from '../../store'
import { increment, decrement } from "../../data/shift-indx";

const CarouselWrapperWithValue = ({ list, ndx, dispatch }) => (
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

const CarouselWrapper = (props) => (
  <Store.Consumer>
    {value => <CarouselWrapperWithValue {...value} {...props} />}
  </Store.Consumer>
);

export default CarouselWrapper;
