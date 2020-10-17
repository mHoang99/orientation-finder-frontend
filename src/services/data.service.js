import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://10.1.10.110:8080/';

class DataService {
    getCategoryDetails(id) {
        return axios.get(axios.defaults.baseURL + `category/get-detail?id=${id}`, { headers: authHeader() });
    }

    getCompanyContact() {
        return axios.get(axios.defaults.baseURL + 'mod', { headers: authHeader() });
    }

}

export default new DataService();