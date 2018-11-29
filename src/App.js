import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import OpeningLogo from './OpeningLogo/OpeningLogo';
import Services from './Services/Services';
import QuotingLinks from './QuotingLinks/QuotingLinks';
import Contacts from './Contacts/Contscts';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import scrollToComponent from 'react-scroll-to-component';

library.add(faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap)

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'main',
    }
  }





  onButtonSubmit1 = () => {
    scrollToComponent(this.quotingLinks, { offset: -90, align: 'top', duration: 1500, ease: 'inCirc' });
  }

  onButtonSubmit2 = () => {
    scrollToComponent(this.services, { offset: -90, align: 'top', duration: 500, ease: 'inCirc' });
  }

  onRouteChange = (route) => {
    this.setState({ route: { route } });
    console.log(route);
  }


  render() {
    const { route } = this.state;
    return (
      <div>
        {route === 'main'
          ? (<div>
            <NavBar />
            <OpeningLogo onButtonSubmit1={this.onButtonSubmit1} onButtonSubmit2={this.onButtonSubmit2} />
            <section ref={(section) => { this.services = section; }}>
              <Services />
            </section>
            <section ref={(section1) => { this.quotingLinks = section1; }}>
              <QuotingLinks onRouteChange={this.onRouteChange} />
            </section>
            <Contacts />
          </div>
          ) : (
            route === 'cnc'
              ? (<NavBar />)
              : (<Contacts />)
          )
        }
      </div>
    );
  }
}

export default App;
