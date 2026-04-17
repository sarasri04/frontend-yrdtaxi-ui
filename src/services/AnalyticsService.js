import axios from "axios";
import API_BASE from "./api";

export const getAnalytics = () => {
  return axios.get(`${API_BASE}/analytics`);
};