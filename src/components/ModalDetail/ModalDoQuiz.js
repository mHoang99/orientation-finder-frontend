import React from "react";
import { Button, Col, Row, Modal, Checkbox, message, Image } from "antd";
import { CloseOutlined, PlayCircleFilled } from "@ant-design/icons";
import AI from "../../assets/icons/Artificial Intelligence.svg";
import CS from "../../assets/icons/Computer Science.svg";
import GD from "../../assets/icons/Game Developer.svg";
import "./Modal.css";
var validate = (answer, length) => {
  for (var i = 0; i < length; i++) {
    if (!answer[i]) return false;
  }
  return true;
};
export default class Quiz extends React.Component {
  state = {
    start: true,
    title: "Let do it !!",

    index: 0,
    listQuestion: [
      { title: "This is question 1", answer: ["always", "often", "never"] },
      { title: "This is question 2", answer: ["always", "often", "never"] },
      { title: "This is question 3", answer: ["always", "often", "never"] },
      { title: "This is question 4", answer: ["always", "often", "never"] },
      { title: "This is question 5", answer: ["always", "often", "never"] },
      { title: "This is question 6", answer: ["always", "often", "never"] },
      { title: "This is question 7", answer: ["always", "often", "never"] },
      { title: "This is question 8", answer: ["always", "often", "never"] },
      { title: "This is question 9", answer: ["always", "often", "never"] },
      { title: "This is question 10", answer: ["always", "often", "never"] },
    ],
    answer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    visible: true,
    isSubmit: -1,
  };
  handleCheckbox = (checkedValues) => {
    console.log("check :", checkedValues.target.name);
    let listChecked = this.state.answer;
    listChecked[checkedValues.target.name] = 1;
    this.setState({
      answer: listChecked,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  getStart = () => {
    this.setState({
      isSubmit: 0,
      start: true,
    });
  };
  handleNext = () => {
    this.setState({
      start: false,
    });
    if (this.state.isSubmit == 0) {
      //validate all answer
      console.log(this.state.answer);
      let answer = this.state.answer;
      debugger;
      if (validate(answer, this.state.listQuestion.length)) {
        //handle submit answer

        this.setState({
          title: "Result",
          isSubmit: 1,
        });
      } else {
        message.error("Answer all question!");
      }
    } else
      this.setState({
        visible: false,
      });
  };

  componentDidMount() {
    //get all question and answer, save to listquestion as format of question
  }
  render() {
    return (
      <div>
        <Modal
          id="quiz"
          cancelButtonProps={{
            style: {
              display: this.state.isSubmit == -1 ? "none" : "",
            },
            className: "Cancel",
          }}
          okButtonProps={{
            style: {
              display: this.state.isSubmit == -1 ? "none" : "",
            },
          }}
          width={
            this.state.isSubmit == -1
              ? "40%"
              : this.state.isSubmit == 0
              ? "60%"
              : "50%"
          }
          bodyStyle={{
            overflowY: this.state.isSubmit == 0 ? "auto" : "unset",
            height: this.state.isSubmit == 0 ? "70vh" : "30vh",
          }}
          title={
            <Row justify="center">
              <span
                style={{ fontWeight: "bold", fontSize: "33px", color: "white" }}
              >
                {this.state.isSubmit == -1
                  ? "Quizzz Time"
                  : this.state.isSubmit == 0
                  ? "Let do it"
                  : " Your Result"}
              </span>
            </Row>
          }
          closeIcon={
            <span onClick={this.handleCancel} id="abcd">
              <CloseOutlined />
            </span>
          }
          centered={true}
          visible={this.state.visible}
          onOk={this.handleNext}
          onCancel={this.handleCancel}
          okText={<div>{this.state.isSubmit == 0 ? "Submit" : "Ok"}</div>}
        >
          {this.state.isSubmit == 0 && (
            <div>
              {this.state.listQuestion.map((data, Index) => (
                <div>
                  <Row
                    justify="start"
                    className="MarginTop"
                    style={{
                      paddingLeft: "5%",
                      fontSize: "23px",
                      color:
                        this.state.start || this.state.answer[Index]
                          ? "black"
                          : "red",
                    }}
                  >
                    {data.title}
                  </Row>
                  <div
                    className="MarginTop"
                    style={{ paddingLeft: "5%", fontSize: "18px" }}
                  >
                    {data.answer.map((data, index) => (
                      <div key={index}>
                        <Checkbox
                          name={Index}
                          onChange={this.handleCheckbox}
                          value={data}
                        >
                          <span style={{ fontSize: "18px" }}>{data}</span>
                        </Checkbox>
                      </div>
                    ))}
                  </div>
                  <div
                    className="MarginTop"
                    style={{
                      borderBottom: "1px solid #f2f2f2",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          )}
          {this.state.isSubmit == 1 && <Result />}
          {this.state.isSubmit == -1 && <Start getStart={this.getStart} />}
        </Modal>
      </div>
    );
  }
}

class Result extends React.Component {
  state = {
    result: ["Artificial Intelligence", "Computer Science", "Game Developer"],
    icon: [AI, CS, GD],
  };

  render() {
    return (
      <Row
        justify="space-around"
        style={{ height: "inherit", alignItems: "center" }}
      >
        {this.state.result.map((data, index) => (
          <Col align="middle">
            <Row justify="center">
              <a href={"/" + "speciality/1"}>
                <Image
                  onClick={(e) => {}}
                  src={this.state.icon[index]}
                  height={100}
                  width={100}
                />
              </a>
            </Row>
            <Row justify="center" className="MarginTop">
              <span style={{ fontSize: "18px", textAlign: "center" }}>
                {data}
              </span>
            </Row>
          </Col>
        ))}
      </Row>
    );
  }
}

class Start extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Row style={{ fontSize: "23px" }}>
          Trả lời câu hỏi sẽ xác định được sở thích của bạn,Chúng ta cùng bắt
          đầu nào
        </Row>
        <Row
          justify="center"
          align="middle"
          style={{ height: "-webkit-fill-available" }}
        >
          <Button
            type="primary"
            className="base"
            id="abc"
            onClick={this.props.getStart}
          >
            Get start
          </Button>
        </Row>
      </div>
    );
  }
}
