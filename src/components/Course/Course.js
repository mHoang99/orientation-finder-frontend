import React from "react";
import "./Course.css";

import { Button, Col, Row, Modal, Checkbox, message, Image } from "antd";
import Logo from "../../assets/image/logo.png";
import { Timeline, Carousel } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import slide1 from "../../assets/image/slide1.png";
import logo from "../../assets/image/logo.jpeg";
import Container from "../UI/Container/Container";
import { List, Avatar, Card, Popconfirm, Skeleton } from "antd";

const { Meta } = Card;

const IconText = ({ type, text }) => (
  <span>
    {/* <Icon type={type} style={{ marginRight: 8 }} /> */}
    {text}
  </span>
);

class Course extends React.Component {
  render() {
    return (
      <List
        // className="login"
        grid={{
          gutter: 20,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
        }}
        dataSource={this.props.data}
        renderItem={(item) => (
          <List.Item>
            <a href={`#`}>
              <Card
                className="item-inner"
                hoverable
                style={{ marginTop: "20px" }}
                cover={
                  <img
                    alt={item.courseContent}
                    src={item.coursePicture}
                    width="100"
                    height="200"
                    object-fit="cover"
                  />
                }
                actions={[
                  <IconText type="like" text={`Test`} key="upvote" />,
                  <IconText
                    type="bar-chart"
                    text={"Level: " + "1"}
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    type="clock-circle"
                    text={"60 lessons"}
                    key="list-vertical-message"
                  />,
                ]}
              >
                <Meta
                  avatar={<Avatar src={Logo} />}
                  title={item.courseContent}
                  description={item.oranizationName}
                />
              </Card>
            </a>
          </List.Item>
        )}
      />
    );
  }
}
export default Course;