import React, {Component} from "react"

import Navbar from "../components/NAVBAR/nav_bar"
import Schedule from "../components/SCHEDULE/schedule"
import courses from "../json/tmp_data/schedule_data.json"
const days = ["Lunes","Martes","Miercoles","Jueves","Viernes"];

class Horario extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Navbar title="Horario"/>
        <Schedule days={days} data={courses.materias}/>
      </div>
    );
  }
}

export default Horario;
