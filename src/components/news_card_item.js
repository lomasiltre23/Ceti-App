import React, {Component} from "react"

class NewsItem extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src={this.props.photo} />
        </div>
        <div class="card-content">
          <span class="card-title">
            <i class="material-icons right">grade</i>
          </span>
          <span class="card-title activator grey-text text-darken-4">
            {this.props.title}
          </span>
          <p>
            <a href={this.props.link}>Ir al post</a>
          </p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {this.props.title}
            <i class="material-icons right">close</i>
          </span>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default NewsItem;
