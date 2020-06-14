import * as TYPE from "../actions/types";

const initialState = {
  submittedForm: false,
  // loaded: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.TOGGLE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default uiReducer;
