import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_BASE_URL;


const getMenu = () => {
  return axios.post(API_URL + "/api/Menu/AksesMenu", { url : window.location.pathname }, { headers: authHeader() })
    .then((response) => {
     

      return response.data.data;
    })

  
};


export default {
  getMenu
};