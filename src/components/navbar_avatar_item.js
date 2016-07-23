import React, {Component} from "react"
class NavbarAvatar extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div class="collection-item avatar">
        <img src={this.props.photo} alt="" class="circle" width="30px" height="30px"/>
        <span class="title">{this.props.name}</span>
        <p>{this.props.last_name}</p>
        <p>{this.props.grade}° {this.props.group}</p>
      </div>
    );
  }
}

export default NavbarAvatar;
