export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));
  
    if (token && token.accessToken) {
      return { Authorization: 'Bearer ' + token.accessToken,
      "Access-Control-Allow-Origin" : process.env.REACT_APP_BASE_URL };
    } else {
      return  {  "Access-Control-Allow-Origin" : process.env.REACT_APP_BASE_URL }
    }
  }