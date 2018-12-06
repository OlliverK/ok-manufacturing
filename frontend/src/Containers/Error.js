import React, { Component } from 'react';
import NavBar from '../Elements/NavBar/NavBar';
import ErrorPart from '../Elements/ErrorPart/ErrorPart'


class CNC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'main'
    }
  }


  render() {
    return (
      <div>
        <NavBar onRouteChange={this.props.onRouteChange} />
        <ErrorPart onRouteChange={this.props.onRouteChange}/>
      </div>
    )
  }
}

export default CNC;
