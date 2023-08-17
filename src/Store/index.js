import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./Reducers";

export const store = createStore(rootReducer)