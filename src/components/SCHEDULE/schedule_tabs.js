import React, {Component} from "react"
class ScheduleTabs extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  }

  render(){
    return(
      <div class="row">
        <div id="test1" class="col s12">Test 1</div>
        <div id="test2" class="col s12">Test 2</div>
        <div id="test3" class="col s12">Test 3</div>
        <div id="test4" class="col s12">Test 4</div>
      </div>
    );
  }
}

export default ScheduleTabs;
