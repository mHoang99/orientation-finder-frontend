import React from "react";
import { Button, Col, Row, Modal, Checkbox, message, Image } from "antd";

class Detail extends React.Component {
  render() {
    return (
      <div>
        <Row align="middle" justify="center" style={{ marginTop: "40px" }}>
          <Col>
            <Image />
          </Col>
          <Col>
            <Row>Coong ty coor phaanf MISA</Row>
            <Row>Communicate, Collaborate and Create value with InnerBeans</Row>
          </Col>
        </Row>
        <div style={{ borderBottom: "1px solid  #f2f2f2" }}></div>
      </div>
    );
  }
}
export default Detail;
