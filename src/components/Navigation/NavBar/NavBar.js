import React from 'react';
import { Row, Col, Dropdown, Menu, Avatar, Button } from 'antd';
import cssClasses from './NavBar.module.css'
import { DownOutlined } from '@ant-design/icons';
import logo from '../../../assets/icons/logo.png';

class NavBar extends React.Component {
    state = {
        currentUser: {
            id: 1,
            is_admin: false,
        }
        // currentUser: localStorage.user
    }


    onClick = ({ key }) => {
        console.log(`Click on item ${key}`);
    };

    render() {
        const menu = (
            <Menu onClick={this.onClick}>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd memu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        return (
            <Row
                align="space-between"
                style={{ backgroundColor: "white" }}
            >
                <Col>
                <img src={logo} style={{height: `40px`}}/>
                </Col>
                <Col>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me, Click menu item <DownOutlined />
                        </a>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me, Click menu item <DownOutlined />
                        </a>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me, Click menu item <DownOutlined />
                        </a>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me, Click menu item <DownOutlined />
                        </a>
                    </Dropdown>
                </Col>
                {this.state.currentUser ? (
                    <Col span={6} align="end">
                        <Dropdown
                            style={{ marginLeft: "2vw", position: 'fixed' }}
                            overlay={
                                <Menu style={{
                                    marginTop: "5px",
                                    padding: "10px",
                                    borderRadius: "10px"
                                }}>
                                    <Menu.Item
                                        align="right"
                                        style={{
                                            borderRadius: "10px"
                                        }}>
                                        Favourite courses
                                            </Menu.Item>
                                    <Menu.Item
                                        align="right"
                                        style={{
                                            borderRadius: "10px"
                                        }}>
                                        Logout
                                    </Menu.Item>
                                </Menu>

                            }
                            placement="bottomRight">
                            <Avatar
                                className={cssClasses.Avatar}
                                shape="circle"
                                src={this.state.currentUser.ava_url}
                            />
                        </Dropdown>
                    </Col>

                ) : (
                        <Col span={6} align="right">
                            <Button
                                style={{ marginRight: "1vw" }}
                            >
                                Register
                            </Button>
                            <Button>Login</Button>
                        </Col>
                    )
                }

            </Row>
        );
    }
}

export default NavBar;