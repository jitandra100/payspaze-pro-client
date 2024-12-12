import { createSelector } from '@reduxjs/toolkit';

export const getAuth = createSelector(
    (state) => state.auth,
    auth => ({
        token: auth.token,
        isAuth: auth?.isAuth,
    })
);
