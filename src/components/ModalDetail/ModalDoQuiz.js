import React from "react";
import { Button, Col, Row, Modal, Checkbox, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
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
    isSubmit: 1,
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
          cancelButtonProps={{
            style: {
              display: this.state.isSubmit == -1 ? "none" : "",
            },
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
              ? "75%"
              : "50%"
          }
          bodyStyle={{
            overflowY: this.state.isSubmit == 0 ? "auto" : "unset",
            height: this.state.isSubmit == 0 ? "800px" : "200px",
          }}
          title={
            <Row justify="center">
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                {this.state.isSubmit == -1
                  ? "Quizz"
                  : this.state.isSubmit == 0
                  ? "Let do it"
                  : "Result"}
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
          okText={<div>{this.state.isSubmit ? "submit" : "ok"}</div>}
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
    result: ["A", "B", "C"],
    icon: ["D", "E", "F"],
  };
  render() {
    return (
      <Row
        justify="space-around"
        alignItems="center"
        style={{ height: "inherit" }}
      >
        {this.state.result.map((data, index) => (
          <Col align="middle">
            <Row>
              <Button type="primary" shape="circle">
                {this.state.icon[index]}
              </Button>
            </Row>
            <Row justify="center" className="MarginTop">
              <span>{data}</span>
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
      <div style={{ height: "inherit" }}>
        <Row style={{ fontSize: "23px" }}>
          Trả lời câu hỏi sẽ xác định được sở thích của bạn,Chúng ta cùng bắt
          đầu nào
        </Row>
        <Row
          justify="center"
          align="center"
          style={{ height: "inherit", alignItems: "center" }}
        >
          <Button
            type="primary"
            style={{ marginTop: "20px" }}
            onClick={this.props.getStart}
          >
            Get start
          </Button>
        </Row>
      </div>
    );
  }
}
