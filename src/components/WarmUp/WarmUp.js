import React from 'react';
import { Col, Row, Button, Input, Alert } from 'antd';
import cssClasses from './WarmUp.module.css';

class WarmUp extends React.Component {
    render() {
        return (
            <Row >
                <Col span={12}>
                    <Row>
                        <a className={cssClasses.TryItOut} href="/robots.txt" target="new">Try It Out</a>
                    </Row>
                    <Row>
                        <Input placeholder="Input flag here" onChange={this.onChangeInput} />
                        <Button type="primary" htmlType="submit" onClick={this.handleSubmitFlag}>
                            Submit
                        </Button>
                        {this.state.success ? (<Alert message="Congratulation" type="success" />) : (<></>)}
                        {!this.state.hiddenFalse ? (<Alert message="Try Again" type="error" />) : (<></>)}
                    </Row>
                </Col>
                <Col span={12} className={cssClasses.chatHint}>
                    <h1 style={{ marginBottom: "2.5rem", padding: '10px', textAlign: "center" }}>Welcome to Cyber Security!</h1>
                    <p className={cssClasses.Odd}>- Let begin with a amazing capture the flag challenge</p>
                    <p className={cssClasses.Even}>- Have you ever heard about "robots.txt"?</p>
                    <p className={cssClasses.Odd}>- Let try it on our site</p>
                    <p className={cssClasses.Even}>- Forbiden Land??</p>
                    <p className={cssClasses.Odd}>- Press Ctrl+U </p>
                </Col>
            </Row>

        );
    }

}

export default WarmUp;


