import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  headers: {
    "Content-type": "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default apiClient;
