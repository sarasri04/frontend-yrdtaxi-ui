import axios from "axios";

const API = "http://localhost:8080/api/routes";

export const getRoutes = () => {
  return axios.get(API);
};

export const addRoute = (data) => {
  return axios.post(API, data);
};