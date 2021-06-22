import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { libReducer } from "./reducers/libReducers";
import {
  getPlanesReducer,
  getPlaneDetailsReducer,
  addPlanesReducer
} from "./reducers/planeReducers";

const reducer = combineReducers({
  lib: libReducer,
  getPlanes: getPlanesReducer,
  getPlaneDetails: getPlaneDetailsReducer,
  addPlane: addPlanesReducer,
});

const middleware = [thunk];

const planeItemsInLocalStorage = localStorage.getItem("lib")
  ? JSON.parse(localStorage.getItem("lib"))
  : [];

const INITIAL_STATE = {
  lib: {
    libItems: planeItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
