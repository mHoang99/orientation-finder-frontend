import React from "react";
import cssClasses from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";
import logo from '../../assets/icons/logo.png'

class Login extends React.Component {
    

    render() {
        return (
            <div className={cssClasses.LoginBox}>
                <div style={{height: "180px", textAlign: 'center'}}>
                    <img src={logo}/>
                </div>
                <LoginForm switchType={this.props.switchType}/>
                <p className={cssClasses.DontHaveAccount}>
                    Don't have an account? <a 
                    onClick={this.props.switchType}>Register here</a>
                </p>
            </div>

        );
    }
}

export default Login;

