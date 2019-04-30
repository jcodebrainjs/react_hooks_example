import React from "react";

const stores = {};

export const createStore = (name, reducers = {}) => {
  const Store = React.createContext(name);
  const reducer = (state = {}, action) => {
    return action && reducers[action.type]
      ? reducers[action.type](state, action.payload)
      : state;
  }
  stores[name] = {
    Store,
    reducer,
  };

  return stores[name];
};

export default createStore;
