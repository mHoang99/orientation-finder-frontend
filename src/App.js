import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import Auth from "./container/Auth/Auth";
import Landing from "./container/Landing/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Course from "./container/Course/Course";
import CreateCourse from "./container/CreateCourse/CreateCourse";
import Speciality from "./container/Speciality/Speciality";
import Header from "./container/Header/Header";
import Quiz from "./components/ModalDetail/ModalDoQuiz";
import Detail from "./components/Oranization/Information";
import Footer from "./container/Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ backgroundColor: "white" }}>
        <Header />
        <Switch>
          <Route path="/course/:cid" component={Course} />
          <Route path="/addcourse" component={CreateCourse} />
          <Route path="/speciality/:sid" component={Speciality} />
          <Route path="/auth/:isRegister" component={Auth} />
          <Route path="/quiz" component={Quiz} />

          <Route path="/detail" component={Detail} />
          <Route path="/" exact component={Landing} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
