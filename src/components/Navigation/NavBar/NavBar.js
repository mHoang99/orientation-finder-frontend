import React from "react";
import { Row, Col, Dropdown, Menu, Avatar, Button } from "antd";
import cssClasses from "./NavBar.module.css";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../../assets/icons/logo.png";
import avatar from "../../../assets/icons/avatar.svg";
import cssCustom from "../NavBar.css";
import authHeader from "../../../services/auth-header";
import authService from "../../../services/auth.service";

class NavBar extends React.Component {
    state = {
        currentUser: JSON.parse(localStorage.getItem('user'))
    };

    onClick = ({ key }) => {
        // console.log(`Click on item ${key}`);
        window.location.href = `/speciality/${key}`
    };

    LoginButtonHandler = () => {
        window.location.href = "/auth/true";
    };
    RegisterButtonHandler = () => {
        window.location.href = '/auth/false'
    }
    LogoutHandler = () => {
        authService.logout();
        window.location.reload();
    }



    render() {
        const menu = (
            <Menu onClick={this.onClick}>
                <Menu.Item key="1">Artificial Intelligence</Menu.Item>
                <Menu.Item key="2">Computer Science</Menu.Item>
                <Menu.Item key="3">Cyber Security</Menu.Item>
                <Menu.Item key="4">Game Developer</Menu.Item>
                {/* <Menu.Item key="5">Web Developer</Menu.Item> */}
            </Menu>
        );
        return (
            <Row
                align="space-between"
                style={{ backgroundColor: "white" }}>
                <Col span={16} style={{ display: 'inline-flex' }}>
                    <Col>
                        <a href="http://localhost:3000">
                            <img alt='logo' src={logo} style={{ height: `40px` }}
                            />
                        </a>
                    </Col>
                    <Col style={{ marginLeft: '50px' }}>
                        <Dropdown overlay={menu}>
                            <a
                                className="ant-dropdown-link"
                                onClick={(e) => { window.location.href = 'http://localhost:3000/categories' }}
                            >
                                Categories <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col style={{ marginLeft: '20px' }}>
                        <a className="ant-dropdown-link" href='http://localhost:3000/organizations'>
                            Organizations
                        </a>
                    </Col>
                    <Col style={{ marginLeft: '20px' }}>
                        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                            Help Center
                        </a>
                    </Col>
                </Col>
                {this.state.currentUser ? (
                    <Col span={6} align="end">
                        <Dropdown
                            style={{ position: "fixed", width: '200px', right: '0' }}
                            overlay={
                                <Menu
                                    style={{
                                        marginTop: "5px",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        width: '200px',
                                        left: '200px'
                                    }}
                                >
                                    <Menu.Item
                                        align="left"
                                        style={{
                                            borderRadius: "10px",
                                        }}
                                    >
                                        Favourite courses
                                    </Menu.Item>
                                    <Menu.Item
                                        align="left"
                                        style={{
                                            borderRadius: "10px",
                                        }}
                                        onClick={this.LogoutHandler}
                                    >
                                        Logout
                                    </Menu.Item>
                                </Menu>
                            }
                            placement="bottomRight"
                        >
                            <div>
                                <span style={{ marginRight: '10px', fontSize: '16px' }}>Hi, <span style={{ fontWeight: 'bold' }}>{this.state.currentUser.name}</span></span>
                                <Avatar
                                    className={cssClasses.Avatar}
                                    shape="circle"
                                    src={avatar}
                                /></div>
                        </Dropdown>
                    </Col>
                ) : (
                        <Col span={6} align="right">
                            <Button
                                className={cssClasses.RegisterButton}
                                type="link"
                                onClick={this.RegisterButtonHandler}
                            >
                                Register
                             </Button>
                            <Button
                                className={[cssClasses.LoginButton, cssClasses.Bold].join(" ")}
                                shape="round"
                                htmlType="submit"
                                size="large"
                                onClick={this.LoginButtonHandler}
                            >
                                Sign in
                            </Button>
                        </Col>
                    )}
            </Row>
        );
    }
}

export default NavBar;
