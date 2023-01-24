import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fa5a531c9b052cc34d9d32ef94aacc50',
    language: 'ko-KR',
  },
});

export default instance;
