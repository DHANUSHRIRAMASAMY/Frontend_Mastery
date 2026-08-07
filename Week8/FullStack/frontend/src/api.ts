import axios from 'axios';

// axios.create sets a base URL so you don't repeat it in every request
// All requests will go to http://localhost:3000
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
