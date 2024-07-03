import axios from "axios";

export const instance = axios.create({
    baseURL: "http://lorby.online/api/v1/auth"
});