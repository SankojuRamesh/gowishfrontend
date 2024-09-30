import axios from 'axios';
import { getCookie, setCookie } from 'typescript-cookie';

let access_token = getCookie('access_token');
// console.log(access_token);
if(!access_token){
    access_token = '';
}
export default axios.create({
  baseURL: 'http://74.208.123.31:5001',
  // baseURL: "http://localhost:3002/",
  // headers: {
  //   'Content-type': 'application/json',
  //   'x-access-token' : access_token,
  // },
})

// export const baseUrl2 = 'https://arkwrxapi.cafemobility.com/'

// User Server Api

export const baseUrl = "https://api.gowish.app/";
// export const baseUrl = "http://localhost:3002/";

// Admin Server Api

export const baseUrl2 = 'https://adminapi.gowish.app/';
// export const baseUrl2 = "http://localhost:3001/";
