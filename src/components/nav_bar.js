import "../style/nav_bar_styles.css";
let navbar_data = require("../json/navbar_data.json");
import React, {Component} from "react"

import NavbarAvatar from "./navbar_avatar_item"
import NavbarLink from "./navbar_link_item"

import avatarPhoto from "../images/icon.png";


class Navbar extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    $(document).ready(function () {
      $(".button-collapse").sideNav({
        closeOnClick: true
      })
    });
  }
  render(){
    var idKey = 0;
    let links = navbar_data.map((data) => {
      return <NavbarLink label={data.label} icon={data.icon} link={data.link} key={++idKey}/>
    })
    return(
      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">{this.props.title}</a>
            <a href="#" data-activates="side-menu-nav" class="button-collapse show-on-large">
              <i class="material-icons">menu</i>
            </a>
            <div class="side-nav" id="side-menu-nav">
              <div class="collection">
                <NavbarAvatar photo={avatarPhoto} name="Jose Carlos" last_name="Rodriguez Villarreal" grade="7" group="M"/>
                {links}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
