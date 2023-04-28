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
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const getPostById = async (id) => {
  try {
    const response = await instance.get(`/post/${id}`);
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const createPost = async (data, userId, access) => {
  try {
    const response = await instance.post(`/post/create/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });

    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const deletePost = async (postId, access) => {
  try {
    const response = await instance.delete(`/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const updatePost = async (data, postId, access) => {
  try {
    const response = await instance.put(`/post/${postId}`, data, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};
