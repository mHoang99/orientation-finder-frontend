import axios from 'axios';
import authHeader from './auth-header';

class DataService {
    getCategoryDetails(id) {
        return axios.get(axios.defaults.baseURL + `category/get-detail?id=${id}`, { headers: authHeader() });
    }

    getCompanyContact() {
        return axios.get(axios.defaults.baseURL + 'mod', { headers: authHeader() });
    }

}

export default new DataService();