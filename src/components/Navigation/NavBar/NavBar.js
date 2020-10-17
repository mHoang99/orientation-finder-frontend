import React from "react";
import { Row, Col, Dropdown, Menu, Avatar, Button } from "antd";
import cssClasses from "./NavBar.module.css";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../../assets/icons/logo.png";
import avatar from "../../../assets/icons/avatar.svg";
import cssCustom from "../NavBar.css";

class NavBar extends React.Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem('user'))
  };

  onClick = ({ key }) => {
    console.log(`Click on item ${key}`);
  };

  LoginButtonHandler = () => {
    window.location.href = "/auth/true";
  };
  RegisterButtonHandler = () => {
    window.location.href = '/auth/false'
  }



  render() {
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="1">Artificial Intelligence</Menu.Item>
        <Menu.Item key="2">Computer Science</Menu.Item>
        <Menu.Item key="3">Game Developer</Menu.Item>
        <Menu.Item key="4">Security</Menu.Item>
        <Menu.Item key="5">Web Developer</Menu.Item>
      </Menu>
    );
    return (
      <Row
        align="space-between"
        style={{ backgroundColor: "white" }}>
        <Col>
          <img alt='logo' src={logo} style={{ height: `40px` }} />
        </Col>
        <Col>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Categories <DownOutlined />
            </a>
          </Dropdown>
        </Col>
        <Col>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Organizations
          </a>
        </Col>
        <Col>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Help Center
          </a>
        </Col>

        {this.state.currentUser ? (
          <Col span={6} align="end">
            <Dropdown
              style={{ marginLeft: "2vw", position: "fixed" }}
              overlay={
                <Menu
                  style={{
                    marginTop: "5px",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <Menu.Item
                    align="right"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Favourite courses
                  </Menu.Item>
                  <Menu.Item
                    align="right"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Logout
                  </Menu.Item>
                </Menu>
              }
              placement="bottomRight"
            >
              <div>
                <span style={{marginRight: '10px',fontSize: '16px'}}>Hi, <span style={{fontWeight: 'bold'}}>{this.state.currentUser.name}</span></span>
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
