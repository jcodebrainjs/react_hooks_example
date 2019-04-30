import React, { useEffect } from "react";
import { Redirect } from 'react-router'
import { getUrl } from "../data/get-url";
import { Store } from "../store";
import {
  CarouselWrapper,
  CarouselNavigation,
  PageCount,
  Loading
} from "./Home/";

const HomeWithMatch = ({ state, dispatch, state: { loading, pagination, data, ndx }, page }) => {
  const getUrlPage = getUrl();
  useEffect(() => {
    if (page !== undefined && state.page !== page) {
      getUrlPage(page)(dispatch);
    }
  });
  return page === undefined ? (<Redirect to='/page/1' />) : (
        <div className="content">
          <h1 className="title">Kitty Carousel</h1>
          <Loading loading={loading} />
          <PageCount pagination={pagination} ndx={ndx} />
          <CarouselNavigation pagination={pagination} />
          <CarouselWrapper list={data} ndx={ndx} dispatch={dispatch} />
        </div>
  )
};

const Home = ({ match }) => (
  <Store.Consumer>
    {value => <HomeWithMatch {...value} {...match.params} />}
  </Store.Consumer>
);

export default Home;
