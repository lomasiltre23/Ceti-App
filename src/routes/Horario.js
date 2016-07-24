import React, {Component} from "react"

import Navbar from "../components/NAVBAR/nav_bar"
import Schedule from "../components/SCHEDULE/schedule"

class Horario extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Navbar title="Horario"/>
        <Schedule />
      </div>
    );
  }
}

export default Horario;
