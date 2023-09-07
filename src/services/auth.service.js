import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL;

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
        email,
      password,
    })
    .then((response) => {
      if (response.data.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.data.passport));
      }

      return response.data.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};