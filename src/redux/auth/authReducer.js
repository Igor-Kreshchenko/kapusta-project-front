import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from './authActions';

const initialUserState = { email: null };

const user = createReducer(initialUserState, {
    [authActions.signupSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [authActions.signupSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [authActions.signupError]: setError,
    [authActions.loginError]: setError,
    [authActions.logoutError]: setError,
    [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
    [authActions.signupSuccess]: () => false,
    [authActions.loginSuccess]: () => true,
    [authActions.getCurrentUserSuccess]: () => true,
    [authActions.logoutSuccess]: () => false,
    [authActions.signupError]: () => false,
    [authActions.loginError]: () => false,
    [authActions.getCurrentUserError]: () => false,
});


export default combineReducers({
    user,
    token,
    error,
    isAuthenticated,
});