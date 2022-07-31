import { configureStore } from '@reduxjs/toolkit';
import contactsSliceReducer from './contacts/contactsReducer';
import { authReducer } from 'redux/auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsSliceReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

export { store };
