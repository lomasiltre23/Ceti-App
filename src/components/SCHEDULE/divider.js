import React, {Component} from "react"

const Divider = (props) => {
  return(
    <div>
      <h6 class="grey-text text-darken-1">{props.label}</h6>
      <div class="divider"></div>
    </div>
  );
}

export default Divider;
