import React from 'react';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import { Layout } from 'antd';
import cssClasses from './Header.module.css'



const Header = (props) => {
    return (
        <Layout.Header
            style={{
                zIndex: 1,
                width: '100%',
                padding: '0 8.3%',
                height: "70px",
                backgroundColor: "white",
                position: 'fixed'
            }}
            className={cssClasses.Header}
        >
            <NavBar />
        </Layout.Header>
    );
}

export default Header;