import React from "react";
import { Button, Col, Row, Modal, Checkbox, message, Image } from "antd";
import Logo from "../../assets/image/logo.png";
import { Timeline, Carousel } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import slide4 from "../../assets/image/slide4.jpg";
import "./information.css";
class Detail extends React.Component {
  render() {
    return (
      <div>
        <Row align="middle" justify="center" style={{ marginTop: "40px" }}>
          <Col>
            <Image src={Logo} />
          </Col>
          <Col style={{ paddingLeft: "15px" }}>
            <Row style={{ fontSize: "25px", fontWeight: "bold" }}>MindX</Row>
            <Row style={{ fontSize: "20px" }}>Journey of dreams</Row>
          </Col>
        </Row>
        <div
          style={{ borderBottom: "1px solid  #f2f2f2", marginTop: "20px" }}
        ></div>
        <div>
          <Row
            justify="center"
            style={{ marginTop: "20px", fontSize: "30px", fontWeight: "bold" }}
          >
            Short introduction
          </Row>
          <Row justify="space-around" style={{ marginTop: "20px" }}>
            <Col lg={12} style={{ marginTop: "20px", fontSize: "18px" }}>
              <Timeline mode="alternate">
                <Timeline.Item>
                  <h3>Create a services site 2015-09-01</h3>
                </Timeline.Item>
                <Timeline.Item color="green">
                  <h3>Solve initial network problems 2015-09-01</h3>
                </Timeline.Item>
                <Timeline.Item
                  dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  <h3>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </h3>
                </Timeline.Item>
                <Timeline.Item color="red">
                  <h3>Network problems being solved 2015-09-01</h3>
                </Timeline.Item>
                <Timeline.Item>
                  <h3>Create a services site 2015-09-01</h3>
                </Timeline.Item>
                <Timeline.Item
                  dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  <h3> Technical testing 2015-09-01</h3>
                </Timeline.Item>
              </Timeline>
            </Col>
            <Col lg={10}>
              <Image src={slide4} alt="" width={600} height={600} />,
            </Col>
          </Row>
          <div>
            <Row justify="center">
              <h2>Contact us</h2>
            </Row>
            <Row justify="space-around">
              <Col>
                <Row>
                  6 floor, Chigamex building 22C Thanh Cong, Ba Đình, HN
                  02477705666
                </Row>
                <Row> 2 floor, 29T1 Hoang Dao Thuy, HN 02477702666</Row>
                <Row>6 floor, Nguyen Phong Sac 107 N, HN 02477703666</Row>
              </Col>
              <Col>
                <Row> 5 floor , 71 Nguyen Chi Thanh, HN 02477704666</Row>

                <Row>
                  4 floor, 505 Minh Khai, Hai Ba Trung distric, HN 02477707666
                </Row>
              </Col>
            </Row>
          </div>
          <div>
            <h2>Courses</h2>
            {this.state.map((data, index) => (
              <div></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
