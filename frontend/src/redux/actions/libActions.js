import * as actionTypes from "../constants/libConstants";
import axios from "axios";

export const addToLib = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/planes/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_LIB,
    payload: {
      plane: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      qty,
    },
  });

  localStorage.setItem("lib", JSON.stringify(getState().lib.libItems));
};

export const removeFromLib = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_LIB,
    payload: id,
  });

  localStorage.setItem("lib", JSON.stringify(getState().lib.libItems));
};

export const removeAllFromLib = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_ALL_FROM_LIB
  });

  localStorage.setItem("lib", JSON.stringify(getState().lib.libItems));
};


