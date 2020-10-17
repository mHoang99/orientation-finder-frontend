import React from 'react';
import ReactPlayer from 'react-player'
import SalaryTable from '../../components/Table/SalaryTable/SalaryTable';
import FeeAndScore from '../../components/Table/FeeAndScoreTable/FeeAndScore';
import { Col, Row, Progress, Card, Space, Divider } from 'antd';
import cssClasses from './Speciality.module.css'
import './Speciality.css'
import Container from '../../components/UI/Container/Container';

class Speciality extends React.Component {
    state = {
        sid: this.props.match.params.sid
    }

    render() {
        console.log(this.state.sid)

        return (
            <React.Fragment>
                <Container>
                    <Row justify="center">
                        <Card style={{ border: "none" }}>
                            <Row style={{ paddingBottom: "30px" }}>
                                <Col align="end" style={{ padding: "30px" }}>
                                    <h1 className={cssClasses.Title}>ARTIFICIAL INTELLIGENT</h1>
                                    <h3 className={cssClasses.Compatible}>Compatible Level</h3>
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

                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(100% - 45px)", color: "grey" }}>INTRODUCTIONS</Divider>

                    <Row justify="center" >
                        <ReactPlayer controls="true" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="calc(100% - 45px)" height="40vw" />
                    </Row>
                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(100% - 45px)", color: "grey" }}>STATISTICS</Divider>

                    <Row justify='space-around'>
                        <Col span={12}>
                            <SalaryTable />
                        </Col>
                        <Col span={12}>
                            <FeeAndScore />
                        </Col>
                    </Row>
                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "grey" }}>WARM UP</Divider>
                    <Row>
                        <Col span={12}></Col>
                        <Col span={12}></Col>
                    </Row>
                    <div style={{ height: "500px" }}></div>
                    <Divider style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "grey" }}>COURSES</Divider>
                    <Row>
                        <Col span={12}></Col>
                        <Col span={12}></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Speciality