import React from 'react';
import ReactPlayer from 'react-player'
import { Col, Row, Progress, Card, Divider, Button } from 'antd';
import cssClasses from './Speciality.module.css'
import './Speciality.css'
import FeeAndScore from '../../components/Table/FeeAndScoreTable/FeeAndScore'
import SalaryTable from '../../components/Table/SalaryTable/SalaryTable'
import Container from '../../components/UI/Container/Container';
import Course from '../../components/Course/Course';
import axios from 'axios'
import DataService from '../../services/data.service';

class Speciality extends React.Component {
    state = {
        sid: this.props.match.params.sid,
        coursesData: [],
        name: "",
        intro: "",
        grades: [],
        salary: [],
    }

    componentDidMount = () => {
        DataService.getCategoryDetails(this.state.sid)
            .then(
                (res) => {
                    if (res.data.success) {
                        console.log(res.data)
                        this.setState({
                            coursesData: res.data.category.courses,
                            name: res.data.category.name,
                            intro: res.data.category.intro,
                            grades: res.data.category.grades,
                            salary: res.data.category.salary,
                        })
                    }
                }
            )
            .catch(
                e => {
                    console.log(e.response)
                }
            )
        // console.log(JSON.parse(localStorage.getItem('user')))
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row justify="center">
                        <Card style={{ border: "none" }}>
                            <Row style={{ paddingBottom: "30px" }}>
                                <Col align="end" style={{ padding: "30px" }}>
                                    <h1 className={cssClasses.Title + ' bold'} >{this.state.name.toUpperCase()}</h1>
                                    <h3 className={cssClasses.Compatible + ' bold'}>Compatible Level</h3>
                                </Col>
                                <Col>
                                    <Progress
                                        id="progressCircle"
                                        type="circle"
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={60}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Row>

                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(100% - 45px)", color: "#4f566b", margin: "50px 0" }}>INTRODUCTIONS</Divider>

                    <Row justify="center" >
                        <ReactPlayer controls="true" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="calc(100% - 45px)" height="40vw" />
                    </Row>
                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(100% - 45px)", color: "#4f566b", margin: "50px 0" }}>STATISTICS</Divider>

                    <Row justify='space-around'>
                        <Col span={12}>
                            <SalaryTable list={this.state.salary} />
                        </Col>
                        <Col span={12}>
                            <FeeAndScore list={this.state.grades} />
                        </Col>
                    </Row>
                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "#4f566b", margin: "50px 0" }}>WARM UP</Divider>
                    <Row>
                        <Col span={12}>
                            <a href="/robots.txt" target="new">enter</a>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                    <div style={{ height: "500px" }}></div>

                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "#4f566b", margin: "50px 0" }}>COURSES</Divider>
                    <Course data={this.state.coursesData} />
                </Container>
            </React.Fragment >
        )
    }
}

export default Speciality