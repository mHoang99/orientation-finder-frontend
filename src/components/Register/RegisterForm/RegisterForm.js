import React from 'react';
import { Form, Input, Checkbox, Alert, Button } from "antd";
import cssClasses from './RegisterForm.module.css';
import AuthService from '../../../services/auth.service';
import axios from 'axios'

class RegisterForm extends React.Component {

    state = {
        err: "",
        isLoading: false,
        email: sessionStorage.getItem('email') ? sessionStorage.getItem('email') : '',
        password: '',
        name: sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '',
        phone: '',
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

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handlePhoneNumChange = (event) => {
        this.setState({
            phone: event.target.value,
        });

    };

    handleSchoolChange = (event) => {
        this.setState({
            school: event.target.value,
        });

    };

    handleFormSubmit = (event) => {

        this.setState({
            message: "",
            successful: false
        });

        AuthService.register(
            this.state.email,
            this.state.password,
            this.state.name,
            this.state.phone,
            this.state.school
        )
            .then(
                response => {
                    console.log(response)
                    if (response.success) {
                        this.setState({
                            message: response.data.message,
                            successful: true
                        });
                        this.props.switchType()
                    } else {
                        window.alert(response.message)

                    }
                }
            )
            .catch(
                error => {
                    console.log(error.response)
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
                    window.alert(resMessage)
                }
            )
    };

    onFinishFailed = (error) => {
        console.log('Failed:', error);
    };

    render() {
        return (
            <Form className={cssClasses.InputForm}
                align="center"
                name="register"
                onFinish={this.handleFormSubmit}
                scrollToFirstError
                initialValues={{
                    name: this.state.name,
                    email: this.state.email,
                }}
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
                        value={this.state.email}
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
                    name="name"
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
                    name="school"
                    //label="Phone Number"
                    rules={[{ required: true, message: 'Please input your school!' }]}
                >
                    <Input
                        size='large'
                        placeholder="School"
                        onChange={this.handleSchoolChange}
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
                        I have read the <a>agreement</a>
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
                        REGISTER
                        </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default RegisterForm;