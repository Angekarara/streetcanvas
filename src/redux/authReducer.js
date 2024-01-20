import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
  authLoaded: false,
  authToken: "",
  authUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState:initialState,
  reducers: {
    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    setAuthLoaded: (state, action) => {
      state.authLoaded = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuthStatus, setAuthLoaded, setAuthToken ,setAuthUser}=
  authSlice.actions;


