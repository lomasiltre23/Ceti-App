import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from "react-router";

import Noticias from "./routes/Noticias";

const container = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Noticias } />
  </Router>
  , container);
