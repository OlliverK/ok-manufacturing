import React, { Component } from 'react';
import NavBar from '../Elements/NavBar/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import NotAvaliable from '../Elements/NotAvaliable/NotAvaliable'

library.add(faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap)

class Casting extends Component {
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
        <NotAvaliable />
      </div>
    )
  }
}

export default Casting;