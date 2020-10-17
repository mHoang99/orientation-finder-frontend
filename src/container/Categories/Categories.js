import React from 'react'
import cssClasses from './Categories.module.css'
import Container from '../../components/UI/Container/Container'
import { Divider } from 'antd';
import Course from '../../components/Course/Course';

class Categories extends React.Component {
    state = {
        // coursesData: {

        // }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Categories</h1>
                    <Divider orientation="left" style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "#4f566b", margin: "50px 0" }}>Artificial Intelligence</Divider>
                    <Course data={this.state.coursesData} />
                    <Divider orientation="left" style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "#4f566b", margin: "50px 0" }}>Computer Science</Divider>
                    <Course data={this.state.coursesData} />
                    <Divider orientation="left" style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "#4f566b", margin: "50px 0" }}>Game Developer</Divider>
                    <Course data={this.state.coursesData} />
                    <Divider orientation="left" style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "#4f566b", margin: "50px 0" }}>Security</Divider>
                    <Course data={this.state.coursesData} />
                    <Divider orientation="left" style={{ fontSize: "30px", fontWeight: "bold", width: "calc(50% - 45px)", color: "#4f566b", margin: "50px 0" }}>Web Developer</Divider>
                    <Course data={this.state.coursesData} />
                </Container>
            </React.Fragment>
        )
    }
}

export default Categories