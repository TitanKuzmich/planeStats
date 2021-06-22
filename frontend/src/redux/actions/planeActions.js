import * as actionTypes from "../constants/planeConstants";
import axios from "axios";

export const addPlane = (newItem) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_PLANE_REQUEST });

    const { data } = await axios.post("/api/planes/add",{...newItem});

    dispatch({
      type: actionTypes.ADD_PLANE_SUCCESS,
      payload: data,
    });
    dispatch(getPlanes())
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_PLANE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPlanes = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PLANES_REQUEST });

    const { data } = await axios.get("/api/planes");

    dispatch({
      type: actionTypes.GET_PLANES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PLANES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const filterPlanes = (sortType) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PLANES_REQUEST });

    const { data } = await axios.get(`/api/planes/sort/${sortType}`);

    dispatch({
      type: actionTypes.GET_PLANES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PLANES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPlaneDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PLANE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/planes/${id}`);

    dispatch({
      type: actionTypes.GET_PLANE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PLANE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeFromCatalog = (id) => async (dispatch) => {
  try {
    const {data} = await axios.post(`/api/planes/remove/${id}`);
    dispatch({ type: actionTypes.REMOVE_PLANE_REQUEST, payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const removePlaneDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PLANE_DETAILS_RESET });
};
