import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    },
    [authOperations.logOut.fulfilled](state, { payload }) {
      return {
        ...initialState,
      };
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    },
  },
});

export default authSlice.reducer;
