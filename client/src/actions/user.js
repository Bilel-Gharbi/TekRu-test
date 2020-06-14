import API from "../api"; // to make api call
//import types
import * as TYPE from "./types";

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await API.get("/data");

    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.GET_ALL_USERS,
      payload: {
        data: response.data.result,
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

export const addUser = (data) => async (dispatch) => {
  try {
    const response = await API.post("user", data);
    dispatch({
      type: TYPE.TOGGLE,
      payload: {
        submittedForm: true,
      },
    });

    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.ADD_USER,
      payload: {
        ...response.data.result,
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

export const updateUser = (data, id) => async (dispatch) => {
  try {
    const response = await API.patch(`user?id=${id}`, data);
    console.log(response);

    //close modal if the form submitted
    dispatch({
      type: TYPE.TOGGLE,
      payload: {
        submittedForm: true,
      },
    });

    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.UPDATE_USER,
      payload: {
        ...response.data.result,
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

export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await API.delete(`user?id=${id}`);

    //close modal if the form submitted
    dispatch({
      type: TYPE.TOGGLE,
      payload: {
        submittedForm: true,
      },
    });

    //clear error
    dispatch({
      type: TYPE.CLEAR_ERRORS,
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: TYPE.DEL_USER,
      payload: {
        ...response.data.result,
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
