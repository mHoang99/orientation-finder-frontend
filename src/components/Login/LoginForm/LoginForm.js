import React from 'react';
import { Form, Input, Alert, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import cssClasses from './LoginForm.module.css';
import SubmitButton from '../../SubmitButton/SubmitButton';
import AuthService from '../../../services/auth.service';

class LoginForm extends React.Component {

    state = {
        username: "",
        password: "",
        err: "",
        message: "",
        isLoading: false,
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.setState({
            message: "",
            isLoading: true,
        });

        AuthService.login(this.state.username, this.state.password).then(
            () => {
                window.alert("logged in");

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


    onFinishFailed = (error) => {
        console.log('Failed:', error);
    };

    render() {
        return (
            <Form className={cssClasses.InputForm}
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

                <Form.Item 
                >
                    <SubmitButton
                        htmlType="submit"
                        loading={this.state.isLoading}
                        onClick={this.handleFormSubmit}>
                        Login
                    </SubmitButton>
                </Form.Item>
                {/* <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item> */}
            </Form>
        )
    }
}

export default LoginForm;