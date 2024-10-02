import axios from 'axios'
import {AuthModel, UserModel} from './_models'
import { baseUrl } from './ApiAxios'
import { Console } from 'console'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${baseUrl}getuserbytoken`
export const LOGIN_URL = `${baseUrl}sign_in/`
export const REGISTER_URL = `${baseUrl}user/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`
export const ADD_USER_URL = `${baseUrl}users/user_mapping`
// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  fullname: string,
  email: string,
  phonenumber: string,
  password: string,
  password_confirmation: string,
  address: string,
  pincode: string,
  city: string,
  state: string,
  country: string

) {
  return axios.post(REGISTER_URL, {
    user_name: fullname,
    email: email,
    phone: phonenumber,
    user_pass: password,
    password_confirmation,
    user_relation: '',
    agent_type: '',
    address,
    city,
    state,
    country,
    pincode,
    is_verified: '',
    user_type: '',
    status: '',
    user_credit: 0,
    created_by: 1
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}


// Server should return AuthModel
export function addUser(
  fullname: any,
  email: string,
  phonenumber: string,
  password: string,
  password_confirmation: string,
  address: string,
  pincode: string,
  city: string,
  state: string,
  country: string,
  parentId: string,
  created_by: string

) {
  return axios.post(ADD_USER_URL, {
    user_name: fullname,
    email: email,
    phone: phonenumber,
    user_pass: password,
    password_confirmation,
    user_relation: '',
    agent_type: '',
    address,
    city,
    state,
    country,
    pincode,
    is_verified: '',
    user_type: '',
    status: '',
    user_credit: 0,
    parent_user_id: parentId,
    created_by: created_by
  })
}