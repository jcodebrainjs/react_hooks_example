import { NAME as name } from "./constants";
import reducers from "./reducers";
import { createStore } from "../../store";

export const Store = createStore(name, reducers);

export default Store;
