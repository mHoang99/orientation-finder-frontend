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
import ListOrg from "./components/Organization/listOrganization";
import Footer from "./container/Footer/Footer";
import ABC from "./container/ABC/ABC";
import Categories from "./container/Categories/Categories";

const url = "localhost:3000";

const App = () => {
  console.log(window.location.href);
  return (
    <BrowserRouter>
      <Layout style={{ backgroundColor: "white" }}>
        {window.location.href !== `${url}/quiz` ? <Header /> : null}
        <Switch>
          <Route path="/addcourse" component={CreateCourse} />
          <Route path="/speciality/:sid" component={Speciality} />
          <Route path="/auth/:isRegister" component={Auth} />
          <Route path="/organization/:id" component={Detail} />
          <Route path="/organization/:id" component={Detail} />
          <Route path="/organization" exact component={ListOrg} />

          <Route path="/" exact component={Landing} />
          <Route path="/abc" exact component={ABC} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
        {window.location.href !== `${url}/quiz` ? <Footer /> : null}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
