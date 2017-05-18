import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

class StationsView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $(".video").toggleClass("video-hide");
  }

  componentWillUnmount(){
    $(".video").toggleClass("video-hide");

  }

  render(){
    return (
      <div>
        <GreetingContainer />
      </div>

    );
  }
}
export default StationsView;
