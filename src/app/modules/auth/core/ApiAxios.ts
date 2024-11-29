import axios from "axios";

// Create an Axios instance
const ApiAxios = axios.create({
  baseURL: 'http://3.88.186.149:3000',
  // baseURL: 'http://74.208.123.31:5001',
  headers: {
    'Content-type': 'application/json',
  },
});

// Add a request interceptor
ApiAxios.interceptors.request.use((config: any) => {
  // Retrieve the access token from local storage
  const access_token = localStorage.getItem('access_token');

  // If the access token exists, set the Authorization header
  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`;
  }

  return config;
}, (error: any) => {
  // Handle the error if needed
  return Promise.reject(error);
});

export default ApiAxios;

// export const baseUrl2 = 'https://arkwrxapi.cafemobility.com/'

// User Server Api

export const baseUrl= 'http://3.88.186.149:3000/'
// export const baseUrl = "http://74.208.123.31:5001/";
// export const baseUrl = "http://localhost:3002/";

// Admin Server Api

export const baseUrl2 = 'https://adminapi.gowish.app/';
// export const baseUrl2 = "http://localhost:3001/";
