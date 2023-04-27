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

export const getPostById = async (id) => {
  try {
    const response = await instance.get(`/post/${id}`);
    // expecting response.data to be {token: "token"}
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};
