import axios from "axios";
import Store from "./store";
import { init, loading, ndx } from "./actions";
import { URL_BASE, API_KEY, CATEGORY, LIMIT } from "./constants";

export const getUrl = dispatch => (page = 1) => {
  dispatch(loading(page));
  const offset = (page - 1) * LIMIT;
  const url = `${URL_BASE}?api_key=${API_KEY}&q=${CATEGORY}&limit=${LIMIT}&offset=${offset}`;
  axios
    .get(url)
    .then(({ data }) => {
      dispatch(init(data));
    })
    .catch(e => console.log("Error", e));
};

export const increment = dispatch => () => {
  dispatch(ndx(1));
};

export const decrement = dispatch => () => {
  const dispatch = Store.dispatch()
  dispatch(ndx(-1));
};

export default { getUrl, increment, decrement };
