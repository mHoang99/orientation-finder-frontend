import axios from "axios";
import authHeader from "./auth-header";

class DataService {
  getCategoryDetails(id) {
    return axios.get(axios.defaults.baseURL + `category/get-detail?id=${id}`, {
      headers: authHeader(),
    });
  }

  getCompanyDetail(i) {
    return axios.get(
      axios.defaults.baseURL + "organization/get-detail?id=" + i,
      {
        headers: authHeader(),
      }
    );
  }
}

export default new DataService();
