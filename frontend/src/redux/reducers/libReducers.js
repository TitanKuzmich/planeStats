import * as actionTypes from "../actions/libConstants";

const LIB_INITIAL_STATE = {
  libItems: [],
};

export const libReducer = (state = LIB_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_LIB:
      const item = action.payload;

      const existItem = state.libItems.find((x) => x.plane === item.plane);

      if (existItem) {
        return {
          ...state,
          libItems: state.libItems.map((x) =>
            x.plane === existItem.plane ? item : x
          ),
        };
      } else {
        return {
          ...state,
          libItems: [...state.libItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_LIB:
      return {
        ...state,
        libItems: state.libItems.filter((x) => x.plane !== action.payload),
      };
    case actionTypes.REMOVE_ALL_FROM_LIB:
      return {
        ...state,
        libItems: []
      };
    default:
      return state;
  }
};
