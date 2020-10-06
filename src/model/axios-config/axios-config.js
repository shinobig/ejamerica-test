import axios from 'axios';

const mainInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export default mainInstance;