import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://10.1.10.110:8080/';

class UserService {
    getUserInfo() {
        return axios.get(axios.defaults.url + 'user', { headers: authHeader() });
    }

    getCompanyContact() {
        return axios.get(axios.defaults.url + 'mod', { headers: authHeader() });
    }

}

export default new UserService();