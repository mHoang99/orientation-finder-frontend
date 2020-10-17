import React from "react";
import cssClasses from "../../container/Categories/Categories.module.css";
import Container from "../../components/UI/Container/Container";
import { Divider, message } from "antd";
import { Link } from "react-router-dom";
import Course from "../../components/Course/Course";
import axios from "axios";
class Categories extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get(axios.defaults.baseURL + "")
      .then((re) => {
        this.setState({
          data: re.data,
        });
      })
      .catch((e) => {
        message.error(e.reponse);
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
              <Link to={"/organization/" + data.oranizationId}>
                {data.name}
              </Link>
              <Course
                data={data.courses}
                logo={data.logo}
                oranizationName={data.name}
              />
            </Divider>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

export default Categories;
