import * as TYPE from "../actions/types";
import {
  updateElementFromState,
  filterElementFromState,
} from "../utils/helper";

const initialState = {
  data: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.GET_ALL_USERS:
      return { ...state, ...action.payload };

    case TYPE.ADD_USER:
      return { ...state, data: [action.payload, ...state.data] };

    case TYPE.DEL_USER:
      //to return new state
      let newState = filterElementFromState(state.data, action.payload);
      return { ...state, data: [...newState] };

    case TYPE.UPDATE_USER:
      // to return new state
      let newUpdatedState = updateElementFromState(state.data, action.payload);
      return { ...state, data: [...newUpdatedState] };

    default:
      return state;
  }
};

export default usersReducer;
