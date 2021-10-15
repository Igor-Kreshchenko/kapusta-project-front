import axios from "axios";
import authActions from "./authActions";
import {pnotifyMessage} from '../../components/Pnotify/Pnotify';

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
    pnotifyMessage('confirmation mail', 'opts');
   
  } catch (error) {
    dispatch(authActions.signupError(error.message));
    pnotifyMessage('already registered', 'optsInfo');
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

const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }
    token.set(persistedToken);

    dispatch(authActions.getCurrentUserRequest());

    try {
      const response = await axios.get('/users/current');

        dispatch(authActions.getCurrentUserSuccess(response.data));
    }
    catch (error) {
        dispatch(authActions.getCurrentUserError(error.message));
    }
};

const authOperations = {
  signUp,
  logIn,
  logOut,
  getCurrentUser
};

export default authOperations;
