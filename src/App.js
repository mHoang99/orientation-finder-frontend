import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Auth from './container/Auth/Auth';


const App = () => {
    return (
        <div>
            <Layout  style={{backgroundColor:"white"}}>
                <Auth />
            </Layout>
        </div>
    );
};

export default App;
