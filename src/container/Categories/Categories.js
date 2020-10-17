import React from "react";
import cssClasses from "./Categories.module.css";
import Container from "../../components/UI/Container/Container";
import { Divider } from "antd";
import Course from "../../components/Course/Course";
import dataService from "../../services/data.service";

class Categories extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    dataService
      .getListCategory()
      .then((re) => {
        this.setState({
          data: re.data.categories,
        });
      })
      .catch((e) => {});
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            Categories
          </h1>
          {Object.keys(this.state.data).map((data, index) => (
            <div>
              <Divider
                orientation="left"
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  width: "calc(50% - 45px)",
                  color: "#4f566b",
                  margin: "50px 0",
                }}
              >
                {data}
                {console.log(this.state.data[data])}
              </Divider>
              {this.state.data[data].map((data1, index1) => {
                let t = [];
                t.push(data1);
                return (
                  <Course
                    data={t}
                    logo={data1.organizationLogo}
                    organizationName={data1.organizationName}
                    id={data1.organizationId}
                  />
                );
              })}
            </div>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default Categories;
