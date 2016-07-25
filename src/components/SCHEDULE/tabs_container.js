import React from "react"
import Courses from "./courses"
const TabContainer = ({day, courses}) => {
    return (
      <div id={`c${day}`} class="col s12">
        <Courses group="Regulares" data={courses.regulares}/>
        <Courses group="Irregulares" data={courses.irregulares}/>
        <Courses group="Condicionadas" data={courses.condicionadas}/>
      </div>
    );
}
export default TabContainer;
