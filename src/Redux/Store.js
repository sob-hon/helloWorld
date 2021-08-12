import { createStore } from "redux";
import rootReducer from "./RootRedecer";

const store = createStore(rootReducer);

export default store;
