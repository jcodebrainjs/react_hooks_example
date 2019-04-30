import React, { useEffect, useReducer } from "react";
import { Redirect } from "react-router";
import { Store, functions } from "../modules/giphyCarousel";
import {
  CarouselWrapper,
  CarouselNavigation,
  PageCount,
  Loading
} from "./Home/";

const { getUrl } = functions;

const HomeWithState = ({
  state,
  dispatch,
  state: { loading, pagination, ndx },
  page
}) => {
  useEffect(() => {
    if (page !== undefined && state.page !== page) {
      getUrl(dispatch)(page);
    }
  });
  return page === undefined ? (
    <Redirect to="/page/1" />
  ) : (
    <div className="content">
      <h1 className="title">Kitty Carousel</h1>
      <Loading loading={loading} />
      <PageCount pagination={pagination} ndx={ndx} />
      <CarouselNavigation pagination={pagination} />
      <CarouselWrapper dispatch={dispatch} />
    </div>
  );
};

const Home = ({ match }) => {
  const Giphy = Store.Store;
  const [state, dispatch] = useReducer(Store.reducer, {});
  return (
    <Giphy.Provider value={{ state, dispatch }}>
      <HomeWithState state={state} dispatch={dispatch} {...match.params} />}
    </Giphy.Provider>
  );
};

export default Home;
