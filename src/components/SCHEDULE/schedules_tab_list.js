import React, {Component} from "react"

class ScheduleTabList extends Component{
  constructor(){
    super();
  }

  render(){
    // Get data from props label and containerId
    return(
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s3"><a href="#test1">Test 1</a></li>
          <li class="tab col s3"><a href="#test2">Test 2</a></li>
          <li class="tab col s3"><a href="#test3">Disabled Tab</a></li>
          <li class="tab col s3"><a href="#test4">Test 4</a></li>
        </ul>
      </div>
    );
  }
}

export default ScheduleTabList;
