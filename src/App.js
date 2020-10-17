import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import Auth from "./container/Auth/Auth";
import Landing from "./container/Landing/Landing";
import ShowResult from "./components/ModalDetail/ShowResult";
import Quiz from "./components/ModalDetail/ModalDoQuiz";
const App = () => {
  return (
    <div>
      <Quiz />
      {/* <ShowResult /> */}
      {/* <Layout style={{backgroundColor:"white"}}>
                <Landing/>
                <Auth />
            </Layout> */}
    </div>
  );
};

export default App;
