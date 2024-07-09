import endpoints from "../endpoints";
import { instance } from "../instance";
import { loginRequest ,loginResponse } from "./types";
import axios from "axios";
export const login = (loginRequest) => instance.post(endpoints.AUTH.LOGIN, loginRequest);

export const baseURL = 'https://lorby.online/api/v1/auth'
export const $authApi = axios.create({
    baseURL,
})

$authApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization =`Bearer ${token}`;
    return config
})



$authApi.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config;
    if (error.status === 403 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try {
            const token = localStorage.getToken('refreshToken')
            const response = await  axios.get(`http://localhost:8080/api/v1/auth/refresh-token`, token)
            localStorage.setToken('accessToken',response.data)
            return $authApi.request(originalRequest)
        }catch (e) {
            localStorage.removeToken('refreshToken')
            localStorage.removeToken('accessToken')
            console.log('не Авторизован')
        }
    }
    throw  error
})
