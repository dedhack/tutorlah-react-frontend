import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getSubjectPosts = async (data, token) => {
  try {
    const response = await instance.get(`/post`, data);
    // expecting response.data to be {token: "token"}
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};

// expected response
// {
//     "content": [
//         {
//             "id": 1,
//             "title": "Title3",
//             "content": "content21234",
//             "creationDateTime": "2023-04-27T16:38:12.489928",
//             "userId": 202
//         }
//     ],
//     "pageNo": 0,
//     "pageSize": 10,
//     "totalElements": 1,
//     "totalPages": 1,
//     "last": false
// }

//

export const loginUser = async (data) => {
  try {
    const response = await instance.post("/auth/authenticate", data);
    // expecting response.data to be {token: "token"}
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
};
