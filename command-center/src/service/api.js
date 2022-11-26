import axios from "axios";

const instance = axios.create({
  baseURL: "http://35.247.244.122:5005/api/", //sabará-api
});

export { instance as axios };
