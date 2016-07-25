import React, {Component} from "react"
import {Link} from "react-router"

class NavbarLink extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <Link to={this.props.link} class="collection-item">
        {this.props.label}
        <i class="material-icons">
          {this.props.icon}
        </i>
      </Link>
    )
  }
}

export default NavbarLink
