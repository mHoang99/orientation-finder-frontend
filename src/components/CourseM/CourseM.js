import React from "react";
import "./CourseM.css";

import { List, Avatar, Card, Popconfirm, Skeleton } from "antd";
import { StarOutlined } from "@ant-design/icons";

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
            <a target="_blank" href={"#"}>
              <Card
                className="item-inner"
                hoverable
                style={{
                  marginTop: "20px",
                  backgroundImage: `linear-gradient(to bottom right, #5c57ab, #00f1ff)`,
                  borderRadius: `3px`,
                }}
                actions={[
                  <StarOutlined style={{ color: "#4f556b" }} />,
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
                  style={{ color: "#fff !important" }}
                  avatar={<Avatar src={item.organizationLogo} />}
                  title={item.courseName}
                  description={
                    <a href={"/organization/" + item.courseId} className="xxx">
                      {item.organizationName}
                    </a>
                  }
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
