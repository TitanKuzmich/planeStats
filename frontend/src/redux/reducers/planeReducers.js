import * as actionTypes from "../constants/planeConstants";

export const getPlanesReducer = (state = { planes: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PLANES_REQUEST:
      return {
        loading: true,
        planes: [],
      };
    case actionTypes.GET_PLANES_ASCENDING:
      return {
        loading: true,
        planes: [],
      };
    case actionTypes.GET_PLANES_DESCENDING:
      return {
        loading: true,
        planes: [],
      };
    case actionTypes.GET_PLANES_SUCCESS:
      return {
        planes: action.payload,
        loading: false,
      };
    case actionTypes.GET_PLANES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.REMOVE_PLANE_REQUEST:
      return {
        planes: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export const addPlanesReducer = (state = { planes: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PLANES_REQUEST:
      return {
        loading: true,
        planes: {}
      };
    case actionTypes.GET_PLANES_SUCCESS:
      return {
        planes: action.payload,
        loading: false,
      };
    case actionTypes.GET_PLANES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPlaneDetailsReducer = (state = { plane: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PLANE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PLANE_DETAILS_SUCCESS:
      return {
        loading: false,
        plane: action.payload,
      };
    case actionTypes.GET_PLANE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PLANE_DETAILS_RESET:
      return {
        plane: {},
      };
    default:
      return state;
  }
};
