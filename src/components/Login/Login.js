import React from "react";
import cssClasses from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";

class Login extends React.Component {
    

    render() {
        return (
            <div className={cssClasses.LoginBox}>
                <div style={{height: "380px"}}>HEADER</div>
                <LoginForm/>
                <p>
                    Don't have an account? <a 
                    onClick={this.props.switchType}>Register here</a>
                </p>
            </div>

        );
    }
}

export default Login;

