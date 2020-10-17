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
                    <h1 className={cssClasses.Bold} style={{ paddingTop: `10rem` }}> An Educational Service Center</h1>
                    <h2 style={{margin: '2vw 8.3%'}}>ESC will help you figure out which Information Technology major is the most compatible with you and find an easy way to get closer with IT, including many related online or offline courses from many reliable organizations</h2>
                    <div style={{ margin: `50px auto` }}><img src={logo} /></div>
                    <div style={{ margin: `50px auto` }}>
                        <Button className={[cssClasses.QuizButton, cssClasses.Bold].join(' ')}
                            shape='round'
                            htmlType="submit"
                            size='large'
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
            {/* For company */}
            <div>
                <Row>
                    <Col xs={{ span: 24 }} lg={{ span: 12, offset: 2 }}>
                        <h1 className={cssClasses.Bold}  style={{ paddingTop: `7rem` }}>For Organization</h1>
                        <p style={{ marginBottom: `32px`, fontSize: `18px` }}>ESC offers an environment for organizations who want to advertise theirs products, IT courses and students who have passion but don't know a right way to start learning IT. </p>
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
                    <Col xs={{ span: 24, offset: 1 }} lg={{ span: 7, offset: 1 }}>
                        <h1 className={cssClasses.Bold} style={{ marginBottom: `10px` }}> 50</h1>
                        <span> courses created</span>
                    </Col>
                    <Col xs={{ span: 24, offset: 1 }} lg={{ span: 7, offset: 1 }}>
                        <h1 className={cssClasses.Bold} style={{ marginBottom: `10px` }}> 100+</h1>
                        <span> organizations participated</span>
                    </Col>
                    <Col xs={{ span: 24, offset: 1 }} lg={{ span: 7, offset: 1 }}>
                        <h1 className={cssClasses.Bold} style={{ marginBottom: `10px` }}> 800+</h1>
                        <span> students registered</span>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Landing;