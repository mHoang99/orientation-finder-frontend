import React from 'react';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import { Layout } from 'antd';
import cssClasses from './Header.module.css'



class Header extends React.Component {
    state = {
        token: localStorage.getItem('accessToken')
    }

    componentDidMount() {
        if (!this.state.token
            && window.location.href !== "http://localhost:3000/"
            && window.location.href !== "http://localhost:3000/auth/true"
            && window.location.href !== "http://localhost:3000/auth/false") {
            window.location.href = 'http://localhost:3000/auth/true'
        }
    }

    render() {
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
            </Layout.Header >
        );
    }

}

export default Header;