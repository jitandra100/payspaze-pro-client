import { createSelector } from '@reduxjs/toolkit';

export const getUser = createSelector(
    (state) => state.user,
    user => ({
        name: user?.name,
        email: user?.email,
        // add more fields
    })
);
