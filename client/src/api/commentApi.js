import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const createComment = async (data, postId, userId, access) => {
  try {
    const response = await instance.post(
      `/post/${postId}/comment/${userId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );

    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};

export const deleteComment = async (commentId, access) => {
  try {
    const response = await instance.delete(`/comment/${commentId}`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};
