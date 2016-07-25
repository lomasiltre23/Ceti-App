import React, {Component} from "react"
import Course from "./course"
import TabHeaders from "./tabs_headers"
import Divider from "./divider"
import TabContainer from "./tabs_container"

class Schedule extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  }

  render(){
    let containerkey = 0;
    let containers = this.props.days.map((data)=>{
      return <TabContainer key={++containerkey} day={data.toLowerCase()} courses={this.props.data[data.toLowerCase()]}/>
    });
    return (
      <div class="row">
        <div class="col s12">
          <TabHeaders list={this.props.days}/>
        </div>
        {containers}
      </div>
    );
  }
}
export default Schedule;
