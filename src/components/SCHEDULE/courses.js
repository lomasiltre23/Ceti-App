import React from "react"
import Course from "./course"
import Divider from "./divider"
const Courses = ({data, group}) => {
  let key = 0;
  if(data.length <= 0){
    if(group == "Regulares"){
      return(
        <div style={{marginTop: '10px'}}>
          <Divider label={group}/>
          <h6 class="grey-text text-darken-1 center">Sin Contenido</h6>
        </div>
      );
    }
    else
      return <span></span>;
  }
  let courses = data.map((course)=>{
      return <Course key={++key} data={course}/>
  });
  return(
    <div style={{marginTop: '10px'}}>
      <Divider label={group}/>
      <div class="collection">
        {courses}
      </div>
    </div>
  );
}

export default Courses;
