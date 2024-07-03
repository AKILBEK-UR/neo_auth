import endpoints from "../endpoints";
import { instance } from "../instance";
import { loginRequest ,loginResponse } from "./types";

export const login = (loginRequest) => instance.post(endpoints.AUTH.LOGIN, loginRequest)
