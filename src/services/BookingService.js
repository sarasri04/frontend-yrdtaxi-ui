import axios from "axios";
import API_BASE from "./api";

export const createBooking = async (data) => {
  return axios.post(`${API_BASE}/bookings`, data);
};

export const getBookings = async () => {
  return axios.get(`${API_BASE}/bookings`);
};

