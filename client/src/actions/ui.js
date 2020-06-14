//Ui reducer
import * as TYPE from "./types";

export const closeModal = (val) => (dispatch) => {
  try {
    return dispatch({
      type: TYPE.TOGGLE,
      payload: {
        submittedForm: val,
      },
    });
  } catch (err) {
    // in case of Error Dispatch and RETURN_ERROR action
    return dispatch({
      type: TYPE.SET_ERRORS,
      payload: {
        name: "ui error ",
        message: err.message,
      },
    });
  }
};
