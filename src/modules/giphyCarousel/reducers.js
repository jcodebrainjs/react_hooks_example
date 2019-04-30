import t from "./actionTypes";

export default {
  [t.LOAD]: (state, page) => {
    return {
      ...state,
      page,
      loading: true
    };
  },
  [t.DISPLAY]: (state, data) => {
    return {
      ...state,
      ...data,
      ndx: 0,
      loading: false
    };
  },
  [t.NDX]: (state, ndx) => {
    if (!state.data) {
      return state
    }
    let newNdx = (state.ndx + ndx) % state.data.length
    if (newNdx < 0) {
      newNdx = newNdx + state.data.length
    }
    return {
      ...state,
      ndx: newNdx,
    };
  }
};
