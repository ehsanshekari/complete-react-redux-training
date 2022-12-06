import axios from 'axios';

export const fetchPostList = (data) => {
    console.log('fetchPostList > data:', data)
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}