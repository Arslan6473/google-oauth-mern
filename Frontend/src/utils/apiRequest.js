import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
  responseType: "json",
});

const apiRequest = async ({ url, method = "GET", data, token }) => {
  try {
    const config = {
      method,
      url,
      headers: {
        "content-type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...(data && { data }),
    };

    const response = await API(config);

    return response?.data;
  } catch (error) {
    const err = error.response?.data;
    console.log("Api request error", err);
  }
};

export { apiRequest };
