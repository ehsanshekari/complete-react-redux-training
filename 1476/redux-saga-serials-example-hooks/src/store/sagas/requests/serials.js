import axios from 'axios';

export const fetchSerials = (term) => {
  return axios.get(`https://api.tvmaze.com/search/shows?q=${term}`);
};
