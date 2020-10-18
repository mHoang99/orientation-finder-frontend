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
  getListCategory() {
    return axios.get(axios.defaults.baseURL + "categories", {
      headers: authHeader(),
    });
  }
  getListOrg() {
    return axios.get(axios.defaults.baseURL + "organization/get-all", {
      headers: authHeader(),
    });
  }
  getAnswerQuiz(data) {
    console.log(authHeader());
    return axios.post(
      axios.defaults.baseURL + "quiz/answer",
      { answer: data.answer },
      {
        headers: authHeader(),
      }
    );
  }
}

export default new DataService();
