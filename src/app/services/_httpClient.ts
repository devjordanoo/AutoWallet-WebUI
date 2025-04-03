import axios, { AxiosInstance } from "axios";
import { LocalStorageKeys } from "../config/localStorageKeys";

interface AxiosClient extends AxiosInstance {
  setAuthHeader: (token: string) => void
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const setupClient = (client: AxiosClient) => {
  const accessToken = localStorage.getItem(LocalStorageKeys.accessToken);

  if(accessToken) {
    client.setAuthHeader(accessToken)
  }
}

export const httpClient: AxiosClient = Object.assign(axiosInstance, {
  setAuthHeader: function (token: string) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
})

setupClient(httpClient);