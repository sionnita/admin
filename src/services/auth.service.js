import axios from "axios";
import authHeader from "./auth-header";


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
    .post(API_URL + "/api/v2/login", {
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

const profil = () => {
  return axios
    .get(API_URL + "/api/v2/profile", { headers: authHeader() })
    .then((response) => {
      if (response.data.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.data.passport));
      }

      return response.data.data;
    })
    .catch((error)=>{
      
  localStorage.removeItem("user");
  localStorage.removeItem("token");
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
  profil,
};