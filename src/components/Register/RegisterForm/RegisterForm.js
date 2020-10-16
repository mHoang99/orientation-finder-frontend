import React from 'react';
import { Form, Input, Checkbox, Alert, Button } from "antd";
import cssClasses from './RegisterForm.module.css';
import AuthService from '../../../services/auth.service';

class RegisterForm extends React.Component {

    state = {
        err: "",
        isLoading: false,
        email: '',
        password: '',
        full_name: '',
        tel_num: '',
        is_loading: false,
        message: "",
        successful: false
    }

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

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        AuthService.register(
            this.state.username,
            this.state.email,
            this.state.password,
            this.state.full_name,
            this.state.tel_num,
        ).then(
            response => {
                this.setState({
                    message: response.data.message,
                    successful: true
                });
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage
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
                align="begin"
                name="register"
                onFinish={this.handleFormSubmit}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    //label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input
                        size='large'
                        placeholder="Email"
                        onChange={this.handleEmailChange}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    //label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        size='large'
                        placeholder="Password (6 or more characters)"
                        onChange={this.handlePasswordChange}
                    />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    //label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        size='large'
                        placeholder="Confirm password"
                    />
                </Form.Item>

                <Form.Item
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your fullname!', whitespace: true }]}
                >
                    <Input
                        size='large'
                        placeholder="Fullname"
                        onChange={this.handleNameChange}
                    />
                </Form.Item>

                <Form.Item
                    name="phone"
                    //label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input
                        size='large'
                        placeholder="Phone Number"
                        onChange={this.handlePhoneNumChange}
                    />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                    ]}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>

                <div className={cssClasses.ErrorRegister}>
                    {this.state.err ? (
                        <Alert
                            message={this.state.err}
                            type="error"
                            showIcon
                        />
                    ) : null}
                </div>

                <Form.Item>
                    <Button className={cssClasses.SubmitButton}
                        type="primary"
                        shape='round'
                        htmlType="submit"
                        size='large'
                        block
                        loading={this.state.loading}
                    >
                        Register
                        </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default RegisterForm;