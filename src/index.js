import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Educations from "./components/Educations";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/cv" component={Cv}></Route>
        <Route exact path="/educations" component={Educations}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
