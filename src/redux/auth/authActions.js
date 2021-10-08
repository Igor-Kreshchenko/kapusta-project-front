import { createAction } from "@reduxjs/toolkit";

const signupRequest = createAction('auth/signupRequest');
const signupSuccess = createAction('auth/signupSuccess');
const signupError = createAction('auth/signupError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

export default {
    signupRequest,
    signupSuccess,
    signupError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError
};