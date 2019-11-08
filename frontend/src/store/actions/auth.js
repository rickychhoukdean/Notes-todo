import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const checkAuthExpiration = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const authLogin = (user, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .get(`http://localhost:8000/api/users/`, {
        user,
        password
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const authSignup = (user, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(`http://localhost:8000/api/users`, {
        user,
        password
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("notelikethis");
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthExpiration(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
