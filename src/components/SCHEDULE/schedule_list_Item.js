import React, {Component} from "react"
import {Link} from "react-router"
import background from "../images/big_sample.jpg";
import icon from "../images/icon.png"

const titleStyle = {
  marginBottom: '5px',
  maxWidth: '65%'
}

const timeStyle = {
  top: '12px'
}

const groupStyle = {
  top: '35px'
}

const textStyle = {
  fontSize: "9pt",
  lineHeight: "1.3rem"
}

const crossingIconStyle = {
  top: '55px',
  right: '5px'
}

const colorStyle = {
  top: '0px',
  left: '0px',
  width: '10px',
  height: '100%'
}

class ScheduleGroupItem extends Component {
  constructor() {
    super();
  }

  render(){
    let space = "\u00A0";
    return(
      <Link to="#" class="collection-item avatar" style={{paddingLeft: '20px'}}>
          <span style={colorStyle} class="secondary-content teal">
            {space}
          </span>
          <span class="title truncate" style={titleStyle}>
            <b>Inovacion y habilidades emprendedoras</b>
          </span>
          <span style={timeStyle} class="secondary-content">
            <p style={textStyle}>15:00 - 16:50</p>
          </span>
          <span style={groupStyle} class="secondary-content">
            <p style={textStyle}>7M</p>
          </span>
          <span style={crossingIconStyle} class="secondary-content">
            <i class="material-icons red-text text-darken-1">event_busy</i>
          </span>
          <p style={textStyle} class="gray-text">D - 205</p>
          <p style={textStyle} class="gray-text">Javier Francisco Rodriguez Cervantes</p>
      </Link>
    );
  }
}

export default ScheduleGroupItem;
