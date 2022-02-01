import axios from "axios";

const instance = axios.create({
  // baseURL: "https://api.cloudfift.com/",
  baseURL:
    "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  },
});

export default instance;
