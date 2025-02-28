import axios from "axios";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f2c45c51-10dc-48f1-aef7-f93775c76652'
  }
});

export default instance;
