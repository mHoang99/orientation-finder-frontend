import axios from "axios";


class AuthService {
    login(email, password) {
        return axios
            .post(axios.defaults.baseURL + "login", {
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
        localStorage.removeItem("accessToken");
    }

    

    facebookLogin(email) {
        return axios
            .post(axios.defaults.baseURL + 'login-facebook', {
                email
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    register(email, password, name, phone, school) {
        return axios.post(axios.defaults.baseURL + "signup", {
            name,
            email,
            password,
            phone,
            school,
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();
