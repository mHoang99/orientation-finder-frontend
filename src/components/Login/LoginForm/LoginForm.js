import React from 'react';
import { Form, Input, Alert, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import cssClasses from './LoginForm.module.css';
import AuthService from '../../../services/auth.service';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

class LoginForm extends React.Component {

    state = {
        email: "",
        password: "",
        err: "",
        message: "",
        isLoading: false,
    }

    handleFormSubmit = (event) => {
        this.setState({
            message: "",
            isLoading: true,
        });

        AuthService.login(this.state.email, this.state.password).then(
            (data) => {
                window.alert("logged in");
                console.log(data);
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage,
                });
            }
        );

    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });

    };

    onFinishFailed = (error) => {
        console.log('Failed:', error);
    };

    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        return (
            <Form className={cssClasses.InputForm}
                align="center"
                onFinish={this.handleFormSubmit}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input size='large'
                        prefix={
                            <UserOutlined
                                style={{
                                    marginRight: "5px"
                                }}
                            />}
                        placeholder="Email"
                        onChange={this.handleEmailChange}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={
                            <LockOutlined
                                style={{
                                    marginRight: "5px"
                                }} />
                        }
                        size='large'
                        placeholder="Password"
                        onChange={this.handlePasswordChange}
                    />
                </Form.Item>

                <div className={cssClasses.ErrorLogin}>
                    {this.state.err ? (
                        <Alert
                            message={this.state.err}
                            type="error"
                            showIcon
                        />
                    ) : null}
                </div>

                <Form.Item>
                    <FacebookLogin
                        appId="611857186158857"
                        // autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        render={renderProps => (
                            <Button
                                className={cssClasses.FacebookButton}
                                type="primary"
                                shape='round'
                                size='large'
                                block
                                loading={this.state.loading}
                                onClick={renderProps.onClick}
                            >
                                FACEBOOK
                            </Button>
                        )}
                    />
                    <Button className={cssClasses.SubmitButton}
                        type="primary"
                        shape='round'
                        htmlType="submit"
                        size='large'
                        block
                        loading={this.state.loading}
                    >
                        LOGIN
                        </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default LoginForm;