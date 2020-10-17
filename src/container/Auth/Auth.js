import { Card } from 'antd';
import React from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Container from '../../components/UI/Container/Container';
import cssClasses from './Auth.module.css'
import loginBg from '../../assets/bg/login-bg.svg';

class Auth extends React.Component {
    state = {
        isLoginFormDisplayed: this.props.match.params.isRegister == 'true' ? true : false
    }

    switchHandler = () => {
        this.setState((prevState) => {
            return ({
                isLoginFormDisplayed: !prevState.isLoginFormDisplayed
            })
        })
    }

    render() {
        let CardClasses;
        if (this.state.isLoginFormDisplayed) {
            CardClasses = [cssClasses.AuthCard, cssClasses.Login];
        } else {
            CardClasses = [cssClasses.AuthCard, cssClasses.Register];
        }

        let CardClass = CardClasses.join(' ')

        return (
            <React.Fragment>
                <div style={{
                    backgroundImage: `url(${loginBg})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom'
                }}>
                    <Container >
                        <Card
                            className={CardClass}
                        >
                            {this.state.isLoginFormDisplayed
                                ? <Login switchType={this.switchHandler} />
                                : <Register switchType={this.switchHandler} />
                            }
                        </Card>
                    </Container></div>
            </React.Fragment>
        )
    }
}

export default Auth