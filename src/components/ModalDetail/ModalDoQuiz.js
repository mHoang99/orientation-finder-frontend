import React from "react";
import { Button, Col, Row, Modal, Radio, message, Image, Spin } from "antd";
import {
  CloseOutlined,
  LoadingOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import AI from "../../assets/icons/Artificial Intelligence.svg";
import CS from "../../assets/icons/Computer Science.svg";
import GD from "../../assets/icons/Game Developer.svg";
import "./Modal.css";
import axios from "axios";
var validate = (answer, length) => {
  for (var i = 0; i < length; i++) {
    if (answer[i] === undefined || answer === null) return false;
  }
  return true;
};
export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      loading: false,
      title: "",
      index: 0,
      listQuestion: [],
      answer: [],
      data: [],
      id: [],
      visible: this.props.visible,
      isSubmit: -1,
    };
  }
  handleCheckbox = (e) => {
    let listChecked = this.state.answer;
    listChecked[e.target.name] = e.target.value + 1;
    this.setState({
      answer: listChecked,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
      isSubmit: -1,
    });
    this.props.closeModal();
  };
  getStart = () => {
    this.setState({
      isSubmit: 0,
      start: true,
    });
  };
  handleNext = () => {
    if (!this.state.err) {
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
            loading: true,
          });
          let data = { answer: this.state.answer };
          const options = {
            method: "post",
            url: axios.defaults.baseURL + "quiz/answer",
            data: data,
          };
          // debugger;
          axios(options)
            .then((response) => {
              let result = response.data.data;
              // console.log(result);
              let a = [],
                b = [];
              Object.keys(result).forEach((e) => {
                console.log(e);
                b.push(e);
                a.push(result[e]);
              });
              this.state.data = b;
              this.state.id = a;
              this.state.loading = false;
              this.setState(this.state);
            })
            .catch((e) => {
              console.log(e);
            });
          this.setState({
            title: "Result",
            isSubmit: 1,
          });
        } else {
          message.error("Answer all question!");
        }
      } else {
        this.setState({
          visible: false,
          isSubmit: -1,
        });
        this.props.closeModal();
      }
    } else {
      this.setState({
        visible: false,
        isSubmit: -1,
      });
      this.props.closeModal();
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible != this.props.visible) {
      this.setState({
        visible: this.props.visible,
      });
    }
  }
  componentDidMount() {
    //get all question and answer, save to listquestion as format of question

    const options = {
      method: "get",
      url: axios.defaults.baseURL + "quiz/get-all-quiz",
    };
    axios(options)
      .then((response) => {
        console.log(response.data);
        this.setState({
          listQuestion: response.data.listQuiz,
        });
      })

      .catch((e) => {
        this.setState({
          err: e.response,
        });
      });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          maskClosable={false}
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
              : "35%"
          }
          bodyStyle={{
            overflowY: this.state.isSubmit == 0 ? "auto" : "unset",
            height: this.state.isSubmit == 0 ? "70vh" : "35vh",
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
                    style={{
                      paddingLeft: "5%",
                      fontSize: "23px",
                      marginTop: "20px",
                      color:
                        this.state.start || this.state.answer[Index]
                          ? "black"
                          : "red",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>{Index + 1}. </span>{" "}
                    {data.question}
                  </Row>
                  <div
                    style={{
                      paddingLeft: "5%",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    <Radio.Group
                      onChange={this.handleCheckbox}
                      name={Index}
                      size="large"
                      style={{ width: "100%" }}
                    >
                      <Row justify="space-between" style={{ width: "100%" }}>
                        {data.answer.map((data, index) => (
                          <div key={index}>
                            <Radio value={index}>
                              <span style={{ fontSize: "18px" }}>{data}</span>
                            </Radio>
                          </div>
                        ))}
                      </Row>
                    </Radio.Group>
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
          {this.state.isSubmit == 1 && (
            <Result result={this.state.data} id={this.state.id} />
          )}
          {this.state.isSubmit == -1 && <Start getStart={this.getStart} />}
        </Modal>
      </div>
    );
  }
}

class Result extends React.Component {
  state = {
    icon: [AI, CS, GD],
  };

  render() {
    return (
      <Row
        justify="space-around"
        style={{ height: "inherit", alignItems: "center" }}
      >
        {this.props.result.map((data, index) => (
          <Col align="middle">
            <Row justify="center">
              <a href={"/" + "speciality/" + this.props.id[index].categoryId}>
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
        <Row
          style={{ fontSize: "23px", marginTop: "65px", fontWeight: "600" }}
          justify="center"
          align="middle"
        >
          Let's figure out which IT major is suitable with you!
        </Row>

        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Button
            type="primary"
            className="base"
            id="abc"
            onClick={this.props.getStart}
          >
            <CaretRightOutlined fill="#ffff" /> Start
          </Button>
        </Row>
      </div>
    );
  }
}
