import axios from "axios";

export default axios.create({
  baseURL: "https://gec-website.herokuapp.com/",
  // responseType: "json",
  headers: {
    // Authorization: REACT_APP_AUTH,
    "Content-Type": "application/json",
    // AppVersion: REACT_APP_VERSION,
  },
});
