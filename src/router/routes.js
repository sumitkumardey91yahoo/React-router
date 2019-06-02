import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../components/home";
import About from "../components/about";

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}
