import React from 'react';
import ReactPlayer from 'react-player'
import SalaryTable from '../../components/Table/SalaryTable/SalaryTable';
import FeeAndScore from '../../components/Table/FeeAndScoreTable/FeeAndScore';
import { Col, Row, Progress, Card } from 'antd';
import cssClasses from './Speciality.module.css'
import './Speciality.css'

class Speciality extends React.Component {
    state = {
        sid: this.props.match.params.sid
    }

    render() {
        console.log(this.state.sid)

        return (
            <React.Fragment>
                <div className={cssClasses.Container} >
                    <Row justify="center">
                        <Card style={{border: "none"}}>
                            <Row style={{ paddingBottom: "30px" }}>
                                <Col align="end" style={{ padding: "30px" }}>
                                    <h1 className={cssClasses.Title}>ARTIFICIAL INTELLIGENT</h1>
                                    <h3 className={cssClasses.Compatible}>Compatible Level</h3>
                                </Col>
                                <Col>
                                    <Progress
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
                    <Row justify="center">
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' style={{width: '100%'}}/>
                    </Row>
                    <Row justify='space-around'>
                        <Col span={12}>
                            <SalaryTable />
                        </Col>
                        <Col span={12}>
                            <FeeAndScore />
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default Speciality