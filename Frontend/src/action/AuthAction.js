import * as AuthApi from "../api/AuthRequest.js";
import * as UserApi from "../api/UserRequest.js";
export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    // console.log(error.response.data)
    const data = error.response.data;
    dispatch({ type: "AUTH_FAIL", data: data });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    // console.log(error.response.data)
    const data = error.response.data;
    dispatch({ type: "AUTH_FAIL", data: data });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATE_USER_START" });
  try {
    console.log(formData);
    const { data } = await UserApi.updateUser(id, formData);
    dispatch({ type: "UPDATE_USER_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATE_USER_FAIL" });
  }
};
