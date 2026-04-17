import axios from "axios";

const API = "http://localhost:8080/api/drivers";

export const getDrivers = () => {
  return axios.get(API);
};