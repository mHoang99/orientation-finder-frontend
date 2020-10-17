import React from "react";
import { Button, Col, Row, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
class ShowResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ["A", "B", "C"],
      icon: ["D", "E", "F"],
      visible: true,
    };
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevProps.result) !== JSON.stringify(this.props.result)
    ) {
      this.setState(this.props.result);
    }
  }
  render() {
    return (
      <div>
        <Modal
          width={800}
          title={
            <Row justify="center">
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Result
              </span>
            </Row>
          }
          cancelButtonProps={{ style: { display: "none" } }}
          closeIcon={<CloseOutlined onClick={this.handleCancel} />}
          centered={true}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row justify="space-around">
            {this.state.result.map((data, index) => (
              <Col>
                <Row>
                  <Button type="primary" shape="circle">
                    {this.state.icon[index]}
                  </Button>
                </Row>
                <Row justify="center">
                  <span>{data}</span>
                </Row>
              </Col>
            ))}
          </Row>
        </Modal>
      </div>
    );
  }
}
export default ShowResult;
