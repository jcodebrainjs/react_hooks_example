import axios from "axios";
import { addReducers } from "../store";
import reducers from "../modules/giphyCarousel/reducers";
import { init, loading } from "../modules/giphyCarousel/actions";
import { URL_BASE, API_KEY, CATEGORY, LIMIT } from "./constants";

export const getUrl = (dispatch) => {
  addReducers(reducers);
  return (page = 1) => {
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
};

export default { getUrl };
