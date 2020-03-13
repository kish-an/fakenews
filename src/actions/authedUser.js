export const SET_AUTHED_USER = 'SET_AUTHED_USER';
// Hardcoded initial authed user
export const id = 'realDonaldTrump';

export const setAuthedUser = id => ({
    type: SET_AUTHED_USER,
    id,
});
