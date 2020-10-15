import { Card } from 'antd';
import React from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import cssClasses from './Auth.module.css'

class Auth extends React.Component {
    state = {
        isLoginFormDisplayed: true,
    }

    switchHandler = () => {
        this.setState((prevState) => {
            return({
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
                <Card
                    className={CardClass}
                >
                    {this.state.isLoginFormDisplayed
                        ? <Login switchType={this.switchHandler}/>
                        : <Register switchType={this.switchHandler}/>
                    }
                </Card>,

            </React.Fragment>
        )
    }
}

export default Auth