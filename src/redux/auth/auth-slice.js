import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      return { ...state, isLoading: true };
    },
    [authOperations.register.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
        isLoading: false,
      };
    },
    [authOperations.register.rejected](state, { payload }) {
      return { ...state, error: payload, isLoading: false };
    },

    [authOperations.logIn.pending](state) {
      return { ...state, isLoading: true };
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
        isLoading: false,
      };
    },
    [authOperations.logIn.rejected](state, { payload }) {
      return { ...state, error: payload, isLoading: false };
    },

    [authOperations.logOut.pending](state) {
      return { ...state, isLoading: true };
    },
    [authOperations.logOut.fulfilled]() {
      return {
        ...initialState,
      };
    },
    [authOperations.logOut.rejected](state, { payload }) {
      return { ...state, error: payload, isLoading: false };
    },
    [authOperations.fetchCurrentUser.pending](state) {
      return { ...state, isFetchingCurrentUser: true };
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
        isFetchingCurrentUser: false,
      };
    },
    [authOperations.fetchCurrentUser.rejected](state, { payload }) {
      return { ...state, error: payload, isFetchingCurrentUser: false };
    },
  },
});

export default authSlice.reducer;
