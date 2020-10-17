import React from 'react';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import { Layout } from 'antd';
import cssClasses from './Header.module.css'



const Header = (props) => {
    return (
        <Layout.Header
            className={cssClasses.Header}
        >
            <NavBar />
        </Layout.Header>
    );
}

export default Header;