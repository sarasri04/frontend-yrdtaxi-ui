import axios from "axios";

const API = "http://localhost:8080/api/payment";

export const createPayment = (data) => {
  return axios.post(API + "/create", data);
};