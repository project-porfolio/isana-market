import axios from 'axios';

const marketAPI = axios.create({
  baseURL: 'http://192.168.119.152:3300/',
});

export default marketAPI;
