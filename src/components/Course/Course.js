import React from "react";
import { Button, Col, Row, Modal, Checkbox, message, Image } from "antd";
import Logo from "../../assets/image/logo.png";
import { Timeline, Carousel } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import slide1 from "../../assets/image/slide1.png";
import logo from "../../assets/image/logo.jpeg";
import Container from "../UI/Container/Container";
import "./Course.css";
class Course extends React.Component {
  render() {
    return (
      <div style={{ width: "inherit" }}>
        <Row>
          <Image src={slide1} alt="" height={300} />
        </Row>
        <Row style={{ padding: "5px" }}> Tag: C/C++, Python, Beginer</Row>
        <Row style={{ fontSize: "20px", fontWeight: "bold" }}>
          <a href={this.props.data.coursePic}>{this.props.data.courseName}</a>
        </Row>
        <Row
          justify="space-between"
          style={{ paddingTop: "8px" }}
          align="middle"
        >
          <Col>
            <Row>
              <Col>
                <Image src={logo} className="circle" />
              </Col>
              <Col
                style={{
                  fontSize: "18px",

                  fontWeight: "bold",
                }}
              >
                {this.props.data.organizationName}
              </Col>
            </Row>
          </Col>
          <Col style={{ fontSize: "20px" }}>$500</Col>
        </Row>
      </div>
    );
  }
}
export default Course;
