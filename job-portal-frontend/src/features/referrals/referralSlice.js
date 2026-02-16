import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    referrals: [],
};

const referralSlice = createSlice({
    name: 'referrals',
    initialState,
    reducers: {
        setReferrals(state, action) {
            state.referrals = action.payload;
        },
    },
});

export const { setReferrals } = referralSlice.actions;
export default referralSlice.reducer;