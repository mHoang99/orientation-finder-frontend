import React from 'react';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import {Layout}from 'antd';



const Header = (props) => {
    return (
        <Layout.Header
            style={{
                zIndex: 1,
                width: '100%',
                paddingLeft: "2vw",
                paddingRight: "2vw",
                height: "70px",
                backgroundColor: "white"
            }}>
            <NavBar />
        </Layout.Header>
    );
}

export default Header;