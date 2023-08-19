import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'
import { rootReducer } from "./Reducers";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
     trace:true
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer)