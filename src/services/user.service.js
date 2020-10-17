import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getUserInfo() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getCompanyContact() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }
  
}

export default new UserService();