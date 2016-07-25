import React, {Component} from "react"

import samplePhoto from "../images/material.png";
import sampleBig from "../images/big_sample.jpg";
import sampleSmall from "../images/nodejs.png"

import Navbar from "../components/NAVBAR/nav_bar"
import NewsItem from "../components/NAVBAR/news_card_item"

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
            photo={samplePhoto}/>
          <NewsItem
            title="Photos"
            link="#"
            description="Descripcion para Photo esta es la descricion que describe la noticia de Photo."
            photo={sampleBig}/>
          <NewsItem
            title="Node JS"
            link="#"
            description="Descripcion para Node esta es la descricion que describe la noticia de Node."
            photo={sampleSmall}/>
        </div>
      </div>
    );
  }
}

export default Noticias;
