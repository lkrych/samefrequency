import React from 'react';

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
      <div>This is the stations view!</div>
    );
  }
}
export default StationsView;
