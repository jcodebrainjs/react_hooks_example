import t from './actionTypes';

export const loading = (payload) => ({
  type: t.LOAD,
  payload,
});

export const init = (payload) => ({
  type: t.DISPLAY,
  payload,
});

export const ndx = (payload) => ({
  type: t.NDX,
  payload,
});

export default { loading, init, ndx }