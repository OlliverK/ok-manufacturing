import React, { Component } from 'react';
import './App.css';
import NavBar from '../Elements/NavBar/NavBar';
import OpeningLogo from '../Elements/OpeningLogo/OpeningLogo';
import Services from '../Elements/Services/Services';
import QuotingLinks from '../Elements/QuotingLinks/QuotingLinks';
import Contacts from '../Elements/Contacts/Contacts';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import scrollToComponent from 'react-scroll-to-component';


library.add(faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'main',
    }
  }

  onButtonSubmit1 = () => {
    scrollToComponent(this.props.quotingLinks, { offset: -90, align: 'top', duration: 1500, ease: 'inCirc' });
  }

  onButtonSubmit2 = () => {
    scrollToComponent(this.props.services, { offset: -90, align: 'top', duration: 500, ease: 'inCirc' });
  }

  render() {
    const {onButtonSubmit2 } = this
    return (
      <div>
        <NavBar onRouteChange={this.props.onRouteChange} />
        <OpeningLogo onRouteChange={this.props.onRouteChange} onButtonSubmit2={onButtonSubmit2} />
        <section ref={(section) => { this.services = section; }}>
          <Services />
        </section>
        <section ref={(section1) => { this.quotingLinks = section1; }}>
          <QuotingLinks onRouteChange={this.props.onRouteChange} />
        </section>
        <Contacts />
      </div>
    );
  }
}

export default Main;
