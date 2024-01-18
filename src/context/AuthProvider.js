import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  auth: null,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signup = async (data) => {
    dispatch({
      type: "AUTH_SIGNUP",
      payload: data,
    });
  };

  const login = async (data) => {
    dispatch({
      type: "AUTH_LOGIN",
      payload: data,
    });
  };

  const logout = async () => {
    dispatch({
      type: "AUTH_LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth: state.auth,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
