import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const registerUser = async (data) => {
  try {
    const response = await instance.post("/auth/register", data);
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};
