// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/auth/authSlice';
// import jobsReducer from './features/jobs/jobSlice';
// import referralsReducer from './features/referrals/referralSlice';

// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         jobs: jobsReducer,
//         referrals: referralsReducer,
//     },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import jobReducer from "../features/jobs/jobSlice";
import referralReducer from "../features/referrals/referralSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
    referrals: referralReducer
  }
});
