import { httpClient } from "../_httpClient";

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  accessToken: string
}

export const signup = async (params: SignupData) => { 
  const { data } = await httpClient.post<SignupResponse>("/auth/signup", params);

  return data;
}