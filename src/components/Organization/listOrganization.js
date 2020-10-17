import React from "react";
import cssClasses from "../../container/Categories/Categories.module.css";
import Container from "../../components/UI/Container/Container";
import { Divider, message } from "antd";
import { Link } from "react-router-dom";
import Course from "../../components/Course/Course";
import axios from "axios";
import dataService from "../../services/data.service";

class Categories extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const options = {
      method: "get",
      url: axios.defaults.baseURL + "organization/get-all",
    };
    dataService
      .getListOrg()
      .then((re) => {
        console.log(re);
        this.setState({
          data: re.data.organizations,
        });
      })
      .catch((e) => {
        console.log(e.response);
        // message.error(e.response);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            Organization
          </h1>

          {this.state.data.map((data, index) => (
            <div id="org">
              <Divider
                orientation="left"
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  width: "calc(50% - 45px)",
                  color: "#4f566b",
                  margin: "20px 0",
                }}
              >
                <Link to={"/organization/" + data.id}>{data.name}</Link>
              </Divider>
              <Course
                data={data.courses}
                logo={data.logo}
                oranizationName={data.name}
                id={data.id}
              />
            </div>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default Categories;
