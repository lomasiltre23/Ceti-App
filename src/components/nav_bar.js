import "../style/nav_bar_styles.css";

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
                <NavbarLink label="Sesión" icon="perm_identity" link="/"/>
                <NavbarLink label="Noticias" icon="chat_bubble_outline" link="/"/>
                <NavbarLink label="Horario" icon="schedule" link="/"/>
                <NavbarLink label="Tira de Materias" icon="view_agenda" link="/"/>
                <NavbarLink label="Calendario" icon="today" link="/"/>
                <NavbarLink label="Mapa" icon="map" link="/"/>
                <NavbarLink label="Favoritos" icon="grade" link="/"/>
                <NavbarLink label="Configuracion" icon="settings" link="/"/>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
