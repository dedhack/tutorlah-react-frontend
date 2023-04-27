import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getSubjectPosts = async (subject) => {
  try {
    const response = await instance.get(`/post/?subject=${subject}`);
    // expecting response.data to be {token: "token"}
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const loginUser = async (data) => {
  try {
    const response = await instance.post("/auth/authenticate", data);
    // expecting response.data to be {token: "token"}
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};
