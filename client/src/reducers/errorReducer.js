import * as TYPE from "../actions/types";

const initialState = {
  status: "",
  name: "",
  filed: "",
  message: "",
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SET_ERRORS:
      return { ...state, ...action.payload };
    case TYPE.CLEAR_ERRORS:
      return { ...initialState };

    default:
      return state;
  }
};

export default errorReducer;
