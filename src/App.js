import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import Auth from "./container/Auth/Auth";
import Landing from "./container/Landing/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateCourse from "./container/CreateCourse/CreateCourse";
import Speciality from "./container/Speciality/Speciality";
import Header from "./container/Header/Header";
import Detail from "./components/Organization/Information";
import Footer from "./container/Footer/Footer";
import ABC from "./container/ABC/ABC";
import Categories from "./container/Categories/Categories";

const url = "localhost:3000";

const App = () => {

    return (
        <BrowserRouter>
            <Layout style={{ backgroundColor: "white" }}>
                <Header />
                <Switch>
                    <Route path="/addcourse" component={CreateCourse} />
                    <Route path="/speciality/:sid" component={Speciality} />
                    <Route path="/auth/:isRegister" component={Auth} />
                    <Route path="/organization/:id" component={Detail} />
                    <Route path="/" exact component={Landing} />
                    <Route path="/abc" exact component={ABC} />
                    <Route path="/categories" exact component={Categories} />
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
                <Footer />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
