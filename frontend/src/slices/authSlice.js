import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfoMP: localStorage.getItem('userInfoMP')
    ? JSON.parse(localStorage.getItem('userInfoMP'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfoMP = action.payload;
      localStorage.setItem('userInfoMP', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfoMP = null;
      localStorage.removeItem('userInfoMP');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
