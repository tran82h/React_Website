import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import "./index.css";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>WebSite</h1>
          <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stuff">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;