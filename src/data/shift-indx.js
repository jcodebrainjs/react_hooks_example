import { ndx } from "../modules/giphyCarousel/actions";

export const increment = (dispatch) => () => {
  dispatch(ndx(1))
}

export const decrement = (dispatch) => () => {
  dispatch(ndx(-1))
}

export default { increment, decrement }