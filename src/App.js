import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Auth from './container/Auth/Auth';
import Landing from './container/Landing/Landing'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Course from './container/Course/Course';
import CreateCourse from './container/CreateCourse/CreateCourse';
import Speciality from './container/Speciality/Speciality';
import Header from './container/Header/Header'

const App = () => {
    return (
        <BrowserRouter>
            <Layout style={{ backgroundColor: "white" }}>
                <Header />
                <Switch>
                    <Route path="/course/:cid" component={Course} />
                    <Route path="/addcourse" component={CreateCourse} />
                    <Route path="/speciality/:sid" component={Speciality} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/" exact component={Landing} />
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
