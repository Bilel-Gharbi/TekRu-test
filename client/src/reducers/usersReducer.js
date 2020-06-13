import * as TYPE from "../actions/types";

const initialState = {
  data: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.GET_ALL_USERS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default usersReducer;
