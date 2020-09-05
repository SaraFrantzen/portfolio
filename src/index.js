import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import Cv from "./Cv";
import Contact from "./Contact";
import Eduacations from "./Eduacations";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/cv" component={Cv}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/eduacations" component={Eduacations}></Route>
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
