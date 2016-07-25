import "../../style/schedule_styles.css"
import React, {Component} from "react"
import {Link} from "react-router"

const Teacher = ({name}) => {
  return <p class="grey-text course-text">{name}</p>
}
const Place = ({building, classRoom}) =>{
  return <p class="grey-text course-text">{building} - {classRoom}</p>
}
const WarningIcon = () =>{
  return(
    <span class="secondary-content course-crossing-icon">
      <i class="material-icons red-text text-darken-1">event_busy</i>
    </span>
  );
}
const Time = ({start, end}) =>{
  return(
    <span class="secondary-content grey-text course-time">
      <p class="course-text">{start} - {end}</p>
    </span>
  );
}
const Title = ({label}) =>{
  return(
    <span class="title truncate grey-text text-darken-2 course-title ">
      <b>{label}</b>
    </span>
  );
}
const ColorBar = ({color}) => {
  return(
    <span class="secondary-content course-color-bar">
      {"\u00A0"}
    </span>
  )
}
const Group = ({label}) =>{
  const groupStyle = {
    top: '35px'
  }
  const textStyle = {
    fontSize: "9pt",
    lineHeight: "1.3rem",
  }
  return(
    <span style={groupStyle} class="secondary-content grey-text group">
      <p style={textStyle}>{label}</p>
    </span>
  );
}

class Course extends Component {
  constructor() {
    super();
  }

  render(){
    let cruce = this.props.data.cruce != null ? <WarningIcon/> : '';

    return(
      <Link to="#" class="collection-item avatar" style={{paddingLeft: '20px'}}>
          <ColorBar/>
          <Title label={this.props.data.materia}/>
          <Time start={this.props.data.hora_inicio}
                end={this.props.data.hora_fin}/>
          <Group label={this.props.data.grupo}/>
          {cruce}
          <Place building={this.props.data.edificio}
                 classRoom={this.props.data.id_salon}/>
          <Teacher name={this.props.data.maestro}/>
      </Link>
    );
  }
}

export default Course;
