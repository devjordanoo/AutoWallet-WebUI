import { httpClient } from "../_httpClient";

export interface SigninData {
  email: string;
  password: string;
}

export interface SigninResponse {
  accessToken: string
}

export const signin = async (params: SigninData) => { 
  const { data } = await httpClient.post<SigninResponse>("/auth", params);

  return data;
}