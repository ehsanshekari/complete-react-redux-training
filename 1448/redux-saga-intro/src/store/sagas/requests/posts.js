import axios from 'axios';

export const fetchPostList = (data) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=${data.limit}`
  );
};
