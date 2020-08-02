import React from "react";
import WelcomePage from "./components/WelcomePage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import Nav from "./components/Navigation";
import {MainContent} from "./styles/MainStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainContent>
        <Nav />
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/work" exact component={WorkPage} />
        </Switch>
      </MainContent>
    </Router>
  );
}

export default App;
