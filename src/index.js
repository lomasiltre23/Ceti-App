import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from "react-router"

import Noticias from "./routes/Noticias"
import Horario from "./routes/Horario"

const container = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Noticias } />
    <Route path="horario" component={ Horario } />
  </Router>
  , container);
