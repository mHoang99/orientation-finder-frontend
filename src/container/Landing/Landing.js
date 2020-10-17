import React from 'react';
import cssClasses from './Landing.module.css';
import headerBg from '../../assets/bg/header-bg.svg';
import logo from '../../assets/icons/logo.png';
import organization from '../../assets/bg/organization.svg';
import { Button, Row, Col } from "antd";

const Landing = (props) => {
    return (
        <React.Fragment>
            <div className={cssClasses.Header} style={{ backgroundImage: `url(${headerBg})` }}>
                <div className={cssClasses.ContentHeader}>
                    <h1 className={cssClasses.Bold} style={{ paddingTop: `7rem` }}> A Crowdsourced Security Platform</h1>
                    <h2> A Crowdsourced Security Platform</h2>
                    <div style={{ margin: `50px auto` }}><img src={logo} /></div>
                    <div style={{ margin: `50px auto` }}>
                        <Button className={[cssClasses.QuizButton, cssClasses.Bold].join(' ')}
                            shape='round'
                            htmlType="submit"
                            size='large'
                        >
                            Get started
                        </Button>
                    </div>
                </div>
            </div>
            {/* For company */}
            <div>
                <Row>
                    <Col xs={{ span: 24 }} lg={{ span: 12, offset: 2 }}>
                        <h1 className={cssClasses.Bold}  style={{ paddingTop: `7rem` }}>For Organization</h1>
                        <p style={{ marginBottom: `32px`, fontSize: `18px` }}>WhiteHub offers a technological solution that enables access to over 500 security researchers to discover critical vulnerabilities in products, including those not discoverable by using traditional solutions and automated tools.</p>
                        <Button className={[cssClasses.PartnerButton, cssClasses.Bold].join(' ')}
                            shape='round'
                            htmlType="submit"
                            size='large'
                        >
                            Register to become a partner
                        </Button>
                    </Col>
                    <Col xs={{ span: 24}} lg={{ span: 8 }}><img style={{ maxWidth: `100%` }} src={organization} /> </Col>
                </Row>
            </div>
            {/* Statistic */}
            <div className={cssClasses.Statistic}>
                <h1 className={cssClasses.Bold} style={{ marginBottom: `10px` }}> ESC in numbers</h1>
                <span> 1 month since the launch, ESC has put up impressive numbers</span>
                <Row>
                    <Col xs={{ span: 24, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                        <h1 className={cssClasses.Bold} style={{ marginBottom: `10px` }}> 50</h1>
                        <span> courses created</span>
                    </Col>
                    <Col xs={{ span: 24, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                        <h1 className={cssClasses.Bold} style={{ marginBottom: `10px` }}> 100+</h1>
                        <span> organizations participated</span>
                    </Col>
                    <Col xs={{ span: 24, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                        <h1 className={cssClasses.Bold} style={{ marginBottom: `10px` }}> 800+</h1>
                        <span> students registered</span>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Landing;