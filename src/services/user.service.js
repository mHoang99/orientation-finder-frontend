import axios from 'axios';
import authHeader from './auth-header';

class UserService {
    getUserInfo() {
        return axios.get(axios.defaults.url + "user", { headers: authHeader() });
    }

    getCompanyContact() {
        return axios.get(axios.defaults.url + "mod", { headers: authHeader() });
    }
}

export default new UserService();
