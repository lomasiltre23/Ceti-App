import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from "react-router";

import Navbar from "./components/nav_bar";
import SamplePage from "./routes/sample_page";

const container = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ SamplePage } />
  </Router>
  , container);
