import React from "react";
import { Button, Col, Row, Modal, Checkbox, message, Image } from "antd";
import Logo from "../../assets/image/logo.png";
import { Timeline, Carousel } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import mindx from "../../assets/image/mindx.jpg";
import "./information.css";
import Container from "../UI/Container/Container";
import Course from "../Course/Course";
import axios from "axios";
import dataService from "../../services/data.service";

class Detail extends React.Component {
    state = {
        Data: {},
        data: [],
    };
    componentDidMount() {

        dataService
            .getCompanyDetail(this.props.match.params.id)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    Data: res.data.organization,
                });
            })
            .catch((e) => {
                console.log(e.response);
            });
    }
    render() {
        return (
            <Container>
                <Row align="middle" justify="center" style={{ marginTop: "40px" }}>
                    <Col>
                        <Image src={this.state.Data.logo} />
                    </Col>
                    <Col style={{ paddingLeft: "15px" }}>
                        <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                            {this.state.Data.name}
                        </Row>
                        <Row style={{ fontSize: "20px" }}>Journey of dreams</Row>
                    </Col>
                </Row>
                <div
                    style={{ borderBottom: "1px solid  #f2f2f2", marginTop: "20px" }}
                ></div>
                <div>
                    <h1
                        style={{
                            marginBottom: "50px",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Short introduction
          </h1>
                    <Row justify="space-around" style={{ marginTop: "20px" }}>
                        <Col lg={12} style={{ marginTop: "20px", fontSize: "18px" }}>
                            <Timeline mode="alternate">
                                <Timeline.Item>
                                    <h2>2015, start with "Techkids" </h2>
                                </Timeline.Item>
                                <Timeline.Item color="green">
                                    <h2>
                                        2017, Techkids has 2 more offices. First class for high
                                        school and secondary school students
                  </h2>
                                </Timeline.Item>
                                <Timeline.Item
                                    dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                                >
                                    <h2>
                                        2017, change name to "MindX" and start the Journey to the
                                        Future
                  </h2>
                                </Timeline.Item>

                                <Timeline.Item color="red">
                                    <h2>In the future, MindX will always be by your side</h2>
                                </Timeline.Item>
                            </Timeline>
                        </Col>
                        <Col lg={10}>
                            <Image src={mindx} alt="" />
                        </Col>
                    </Row>
                    <div>
                        <h1
                            style={{
                                margin: "50px 0",
                                fontWeight: "bold",
                                textAlign: "center",
                                paddingTop: "0",
                            }}
                        >
                            Courses
            </h1>

                        <Course
                            data={this.state.Data.courses}
                            logo={this.state.Data.logo}
                            oranizationName={this.state.Data.name}
                        />
                    </div>
                    <div>
                        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
                            Contact us
            </h1>
                        <Row justify="space-around">
                            <Col>
                                <Row style={{ lineHeight: `50px` }}>
                                    <h2>
                                        1.
                    <a href={this.state.Data.address} target="_blank">
                                            {this.state.Data.address}
                                        </a>
                                    </h2>
                                </Row>
                                <Row style={{ lineHeight: `50px` }}>
                                    <h2>
                                        2. 2nd floor, 29T1 Hoang Dao Thuy, HN - Tel: 02477702666
                  </h2>
                                </Row>
                                <Row style={{ lineHeight: `50px` }}>
                                    <h2>3. 6th floor, Nguyen Phong Sac, HN - Tel: 02477703666</h2>
                                </Row>
                                <Row style={{ lineHeight: `50px` }}>
                                    <h2>
                                        4. 5th floor , 71 Nguyen Chi Thanh, HN - Tel: 02477704666
                  </h2>
                                </Row>
                                <Row style={{ lineHeight: `50px` }}>
                                    <h2>
                                        5. 4th floor, 505 Minh Khai, Hai Ba Trung district, HN -
                                        Tel: 02477707666
                  </h2>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Detail;
