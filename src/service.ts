import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API ?? 'https://fonoiaf-back.onrender.com',
  timeout: process.env.TIMEOUT ?? 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// https://www.npmjs.com/package/axios
export default instance;
