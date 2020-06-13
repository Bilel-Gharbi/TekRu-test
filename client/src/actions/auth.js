import API from "../api"; // to make api call
//import types
import * as TYPE from "./types";

export const login = (obj) => async (dispatch) => {
  try {
    const response = await API.post("/login", obj);

    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.LOGIN,
      payload: {
        isLogged: true,
        token: response.data.result.token,
        email: response.data.result.email,
        userInfo: response.data.result.userData,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: err.response.data.status,
        name: err.response.data.err.name,
        filed: err.response.data.err.filed,
        message: err.response.data.err.message,
      },
    });
  }
};

//
export const signUp = (data) => async (dispatch) => {
  try {
    // try signup
    const response = await API.post("/signup", data);

    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return SIGNUP action to set state
    return dispatch({
      type: TYPE.SIGNUP,
      payload: {
        isLogged: true,
        token: response.data.result.token,
        email: response.data.result.email,
        userInfo: response.data.result.userData,
      },
    });
  } catch (err) {
    //case signup fail dispatch RETURN_ERROR action to update the error state
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        status: err.response.data.status,
        name: err.response.data.err.name,
        filed: err.response.data.err.filed,
        message: err.response.data.err.message,
      },
    });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const response = await API.get();

    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });
    dispatch({
      type: TYPE.STAY_LOGGED,
      payload: {
        isLogged: true,
        token: response.data.result.token,
        email: response.data.result.email,
        userInfo: response.data.result.userData,
      },
    });
  } catch (err) {
    //case logout fail
    return dispatch({
      type: TYPE.RETURN_ERRORS,
      payload: {
        name: "stay logged error ",
        message: "token problem",
      },
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });
    dispatch({
      type: TYPE.LOGOUT,
    });
  } catch (err) {
    //case logout fail
    return dispatch({
      type: TYPE.RETURN_ERRORS,
      payload: {
        name: "logout",
        message: "logout problem",
      },
    });
  }
};
