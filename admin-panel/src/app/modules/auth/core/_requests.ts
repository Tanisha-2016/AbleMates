// import axios from 'axios'
// import {AuthModel, UserModel} from './_models'

// const API_URL = process.env.REACT_APP_API_URL
// console.log(API_URL)

// export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
// export const LOGIN_URL = `${API_URL}/login`
// export const REGISTER_URL = `${API_URL}/register`
// export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// // Server should return AuthModel
// export function login(email: string, password: string) {
//   return axios.post<AuthModel>(LOGIN_URL, {
//     email,
//     password,
//   })
// }

// // Server should return AuthModel
// export function register(
//   email: string,
//   firstname: string,
//   lastname: string,
//   password: string,
//   password_confirmation: string
// ) {
//   return axios.post(REGISTER_URL, {
//     email,
//     first_name: firstname,
//     last_name: lastname,
//     password,
//     password_confirmation,
//   })
// }

// // Server should return object => { result: boolean } (Is Email in DB)
// export function requestPassword(email: string) {
//   return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
//     email,
//   })
// }

// export function getUserByToken(token: string) {
//   return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
//     api_token: token,
//   })
// }
// NO BACKEND — FRONTEND ONLY FAKE AUTH SYSTEM

import { AuthModel, UserModel } from './_models'

// simulate server delay
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

// ----------------------
// LOGIN (NO BACKEND)
// ----------------------
export async function login(email: string, password: string) {
  await wait(700)

  // dummy condition 
  if (email === 'admin@demo.com' && password === 'demo') {
    const fakeAuth: AuthModel = {
      api_token: 'demo_token_12345',
    }
    localStorage.setItem('able_auth', JSON.stringify(fakeAuth))
    return { data: fakeAuth }
  }

  throw new Error('Invalid credentials')
}

// ----------------------
// REGISTER (NO BACKEND)
// ----------------------
export async function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  await wait(700)

  const fakeAuth: AuthModel = {
    api_token: 'register_token_98765',
  }

  const user: UserModel = {
    id: 1,
    email,
    first_name: firstname,
    last_name: lastname,
    avatar: '/media/avatars/300-1.jpg',
  }

  localStorage.setItem('able_auth', JSON.stringify(fakeAuth))
  localStorage.setItem('able_user', JSON.stringify(user))

  return { data: fakeAuth }
}

// ----------------------
// VERIFY TOKEN (NO BACKEND)
// ----------------------
export async function getUserByToken(token: string) {
  await wait(500)

  const savedUser = localStorage.getItem('able_user')

  // if user exists, return it
  if (savedUser) {
    return { data: JSON.parse(savedUser) }
  }

  // else return default user
  const user: UserModel = {
    id: 1,
    email: 'admin@demo.com',
    first_name: 'Admin',
    last_name: 'User',
    avatar: '/media/avatars/300-1.jpg',
  }

  localStorage.setItem('able_user', JSON.stringify(user))

  return { data: user }
}

// ----------------------
// FORGOT PASSWORD (NO BACKEND)
// ----------------------
export async function requestPassword(email: string) {
  await wait(500)
  return { data: { result: true } }
}
