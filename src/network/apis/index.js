import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";

export const axiosInstance = axios.create({
  baseURL: "https://api-staging.elfanni.org/api/v1/users",
  // baseURL: "http://192.168.1.14:3000/api/v1/users",
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'x-api-key' : 'elfanni-api-web'
  }
});

// Handle request process
axiosInstance.interceptors.request.use(
  request => requestHandler(request)
);
// Handle response process
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);
