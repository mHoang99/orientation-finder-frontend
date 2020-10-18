import React from "react";
import { Col, Row, Button, Input, Alert } from "antd";
import cssClasses from "./WarmUp.module.css";
import tryIcon from "../../assets/icons/try-this.png";
const warmupList = [1, 3];
class WarmUp extends React.Component {
  state = {
    flag: "",
    success: false,
    hiddenFalse: true,
  };

  handleSubmitFlag = (e) => {
    e.preventDefault();
    if (this.state.flag === "flag{w3lc0me_t0_s3cur1ty}") {
      this.setState({
        success: true,
        hiddenFalse: true,
      });
    } else {
      this.setState({
        hiddenFalse: false,
      });
    }
  };
  onChangeInput = (e) => {
    this.setState({
      flag: e.target.value,
    });
    // console.log(e.target.value)
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <h1
            style={{
              marginBottom: "2.5rem",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Welcome to Cyber Security!
          </h1>
        </Row>
        <Row>
          <Col span={12} align="start" className={cssClasses.chatHint}>
            <p className={cssClasses.Odd}>
              - Let begin with a amazing capture the flag challenge
            </p>
            <p className={cssClasses.Even}>
              - Have you ever heard about "robots.txt"?
            </p>
            <p className={cssClasses.Odd}>- Let try it on our site</p>
            <p className={cssClasses.Even}>- Forbiden Land??</p>
            <p className={cssClasses.Odd}>- Press Ctrl+U </p>
            <Row justify="left" style={{ marginTop: "20px" }}>
              <Input
                style={{
                  width: "40%",
                  marginRight: "10px",
                  minWidth: "300px",
                }}
                placeholder="Input flag here"
                onChange={this.onChangeInput}
              />
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.handleSubmitFlag}
              >
                Submit
              </Button>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="center">
              <a
                className={cssClasses.TryItOut}
                href="/robots.txt"
                target="_blank"
              >
                <img style={{ width: "250px" }} src={tryIcon} />
              </a>
            </Row>

            <Row align="center" style={{ marginTop: "20px" }}>
              {this.state.success ? (
                <Alert message="Congratulation" type="success" />
              ) : null}
              {!this.state.hiddenFalse ? (
                <Alert message="Try Again" type="error" />
              ) : null}
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default WarmUp;
