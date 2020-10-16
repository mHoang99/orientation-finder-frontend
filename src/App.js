import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Auth from './container/Auth/Auth';
import Landing from './container/Landing/Landing'


const App = () => {
    return (
        <div>
            <Layout style={{backgroundColor:"white"}}>
                <Landing/>
                <Auth />
            </Layout>
        </div>
    );
};

export default App;
