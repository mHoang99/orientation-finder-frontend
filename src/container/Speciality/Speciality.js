import React from 'react';
import SalaryTable from '../../components/Table/SalaryTable/SalaryTable';
import FeeAndScore from '../../components/Table/FeeAndScoreTable/FeeAndScore';
import { Col, Row } from 'antd';
import cssClasses from './Speciality.module.css'


class Speciality extends React.Component {
    state = {
        sid: this.props.match.params.sid
    }

    render() {
        console.log(this.state.sid)

        return (
            <React.Fragment>
                <Row className={cssClasses.container} justify='space-around'>
                    <Col span={12}>
                        <SalaryTable />
                    </Col>
                    <Col span={12}>
                        <FeeAndScore />
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
}

export default Speciality