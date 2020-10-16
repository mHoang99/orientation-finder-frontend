import React from "react";
import cssClasses from './Register.module.css'
import RegisterForm from "./RegisterForm/RegisterForm";


class Register extends React.Component {

    render() {
        return (
            <div className={cssClasses.RegisterBox}>
                <div className={cssClasses.RegisterHeader} >
                    REGISTER
                </div>
                <RegisterForm />
                <p className={cssClasses.HadAccount}>
                    Already had an account? <a
                        href="/#"
                        onClick={this.props.switchType}
                    >Login</a>
                </p>
            </div>

        );
    }
}

export default Register;

