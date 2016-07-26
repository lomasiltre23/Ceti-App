import React, {Component} from "react"

import Navbar from "../components/NAVBAR/nav_bar"
import NewsItem from "../components/NAVBAR/news_card_item"
import icon from "../images/icon.png"

class Noticias extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Navbar title="Noticias"/>
        <div class="container">
          <NewsItem
            title="Material Design"
            link="#"
            description="Descripcion para material design esta es la descricion que describe la noticia de material design."
            photo={icon}/>
          <NewsItem
            title="Photos"
            link="#"
            description="Descripcion para Photo esta es la descricion que describe la noticia de Photo."
            photo={icon}/>
          <NewsItem
            title="Node JS"
            link="#"
            description="Descripcion para Node esta es la descricion que describe la noticia de Node."
            photo={icon}/>
        </div>
      </div>
    );
  }
}

export default Noticias;
