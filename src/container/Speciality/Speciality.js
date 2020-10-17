import React from 'react';
import ReactPlayer from 'react-player'
import { Col, Row, Progress, Card, Divider, Button,Input, Alert } from 'antd';
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
<<<<<<< HEAD
        flag: "",
        success: false,
        hiddenFalse: true
=======
        point: {}
>>>>>>> e0ae358fa657cdc7d83926c2e7c09a7b15b00596
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
                            point: res.data.category.point
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
    handleSubmitFlag = (e)=>{
        e.preventDefault();
        if(this.state.flag ==="flag{w3lc0me_t0_s3cur1ty}"){
            this.setState({
                success: true,
                hiddenFalse: true
            })
        }
        else{
            this.setState({
                hiddenFalse: false
            })
        }
    }
    onChangeInput = (e)=>{
        this.setState({
            flag:e.target.value
        })
        // console.log(e.target.value)
    }
    render() {
        let p = (this.state.point.userPoint/this.state.point.maxPoint*100).toFixed(0);
        p = isNaN(p) ? 0 : p 
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
                                        percent={p}
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
                    <Row >
                        <Col span={12}>
                            <Row>
                                <a className={cssClasses.TryItOut} href="/robots.txt" target="new">Try It Out</a>
                            </Row>
                            <Row>
                                <Input placeholder="Input flag here" onChange={this.onChangeInput}/>
                                <Button type="primary" htmlType="submit" onClick={this.handleSubmitFlag}>
                                    Submit
                                </Button>
                                {this.state.success?(<Alert message="Congratulation" type="success" />):(<></>)}
                                {!this.state.hiddenFalse?(<Alert message="Try Again" type="error" />):(<></>)}
                            </Row>
                        </Col>
                        <Col span={12} className={cssClasses.chatHint}>
                            <h1 style={{ marginBottom:"2.5rem",padding:'10px',textAlign:"center" }}>Welcome to Cyber Security!</h1>
                            <p className={cssClasses.Odd}>- Let begin with a amazing capture the flag challenge</p>
                            <p className={cssClasses.Even}>- Have you ever heard about "robots.txt"?</p>
                            <p className={cssClasses.Odd}>- Let try it on our site</p>
                            <p className={cssClasses.Even}>- Forbiden Land??</p>
                            <p className={cssClasses.Odd}>- Press Ctrl+U </p>
                        </Col>
                    </Row>
                    <div style={{ height: "75px" }}></div>

                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "#4f566b", margin: "50px 0" }}>COURSES</Divider>
                    <Course data={this.state.coursesData} />
                </Container>
            </React.Fragment >
        )
    }
}

export default Speciality