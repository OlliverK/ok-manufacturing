import React, { Component } from 'react';
import NavBar from '../Elements/NavBar/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import NotAvaliable from '../Elements/NotAvaliable/NotAvaliable'
import PrintingHover from '../Elements/PrintingHover/PrintingHover'
library.add(faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap)

class Printing extends Component {
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
        <PrintingHover/>
      </div>
    )
  }
}

export default Printing;