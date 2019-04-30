import React, { useReducer } from "react";

export const Store = React.createContext();

const initialState = {};

let reducers = {}

function reducer(state = {}, action) {
  return action && reducers[action.type] ? reducers[action.type](state, action.payload) : state
}

export const addReducers = (newReducers) => {
  reducers = { ...reducers, ...newReducers}
}

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
};

export default { StoreProvider, addReducers, Store };
