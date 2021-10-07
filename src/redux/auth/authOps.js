import axios from "axios";
import authActions from './authActions';

axios.defaults.baseURL = 'http://localhost:4000/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
        const response = await axios.post('/signup', credentials);
        token.set(response.data.token);
        dispatch(authActions.registerSuccess(response.data));
    }
    catch (error) {

        dispatch(authActions.registerError(error.message));
    }
};

const logIn = credentials => async dispatch => {
    dispatch(authActions.loginRequest());

    try {
        const response = await axios.post('/login', credentials);
        token.set(response.data.token);
        dispatch(authActions.loginSuccess(response.data));
    }
    catch (error) {
        dispatch(authActions.loginError(error.message));
    }
};

const logOut = () => async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
        await axios.post('/logout');
        token.unset();
        dispatch(authActions.logoutSuccess());
    }
    catch (error) {
        dispatch(authActions.logoutError(error.message));
    }
};

export default {
    register,
    logIn,
    logOut
};