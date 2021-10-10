import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://kapusta-app.herokuapp.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const signUp = (credentials) => async (dispatch) => {
  dispatch(authActions.signupRequest());

  try {
    const response = await axios.post("/users/signup", credentials);
    token.set(response.data.responseBody.token);
    dispatch(authActions.signupSuccess(response.data.responseBody));
  } catch (error) {
    dispatch(authActions.signupError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);
    token.set(response.data.responseBody.token);
    dispatch(authActions.loginSuccess(response.data.responseBody));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.get("/users/logout");
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const authOperations = {
  signUp,
  logIn,
  logOut,
};

export default authOperations;
