import { createSlice } from '@reduxjs/toolkit';

// User Slice
/**
 * A slice for authentication with `setAuth` action.
 * @typedef {Object} UserState
 * @property {string} _id The user Id
 * @property {string} name 
 * @property {string} email 
 */
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        _id: '',
        name: '',
        email: '',
    },
    reducers: {
        /**
        * Set user details.
        * @param {UserState} state The current state of the user.
        * @param {Object} action The action object.
        * @param {Object} action.payload The payload object.
        * @param {string} action.payload._id
        * @param {boolean} action.payload.name
        * @param {number} action.payload.email
        */
        updateUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        emptyUser: (state, action) => {
            return {
                _id: '',
                name: '',
                email: '',
            };
        },
    },
});
export const { updateUser, emptyUser } = userSlice.actions;

