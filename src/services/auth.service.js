import axios from "axios";
const API_URL = "http://10.1.10.110:8080/";


class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "login", {
                email,
                password,
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(email, password, name, phone, school) {
        return axios.post(API_URL + "signup", {
            name,
            email,
            password,
            phone,
            school,
        });
    } 

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();