import axios from "axios";
// Set the base URL for your API requests
const API_BASE_URL = "http://localhost:5000/api";
// Example API functions
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
