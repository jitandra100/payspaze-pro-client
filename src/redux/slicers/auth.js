import { createSlice } from '@reduxjs/toolkit';

// Auth Slice
/**
 * A slice for authentication with `setAuth` action.
 * @typedef {Object} AuthState
 * @property {string} token The authentication token.
 * @property {boolean} isAuth Whether the user is authenticated.
 */

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        isAuth: false,
    },
    reducers: {
        /**
         * Set authentication details.
         * @param {AuthState} state The current state of the authentication.
         * @param {Object} action The action object.
         * @param {Object} action.payload The payload object.
         * @param {string} action.payload.token The authentication token.
         * @param {boolean} action.payload.isAuth Whether the user is authenticated.
         */
        setAuth: (state, action) => {
            return { ...state, ...action.payload };
        },
        logout: (state, action) => {
            return {
                ...state,
                token: '',
                isAuth: false,
            };
        }
    },
});
export const { setAuth, logout } = authSlice.actions;


