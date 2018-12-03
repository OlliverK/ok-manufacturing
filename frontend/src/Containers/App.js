import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Main from './Main'
import CNC from './CNC'
import Printing from './Printing'
import Plasma from './Plasma'
import Casting from './Casting'
import Electronics from './Electronics'
import Sheet from './Sheet'
import PartUpload from './PartUpload'

library.add(faGem, faTruck, faClock, faFlagUsa, faPhone, faEnvelope, faMap, faShoppingCart)

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'main'
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
    console.log(route);
  }

  render() {
    const { route } = this.state;
    return (
      <div>
        {route === 'main'
          ? (
            <Main onRouteChange={this.onRouteChange} />
          ) : (
            route === 'cnc'
              ? (
                <CNC onRouteChange={this.onRouteChange} />
              ) : (
                route === 'printing'
                  ? (
                    <Printing onRouteChange={this.onRouteChange} />
                  ) : (
                    route === 'plasma'
                      ? (
                        <Plasma onRouteChange={this.onRouteChange} />
                      ) : (
                        route === 'casting'
                          ? (
                            <Casting onRouteChange={this.onRouteChange} />
                          ) : (
                            route === 'electronics'
                              ? (
                                <Electronics onRouteChange={this.onRouteChange} />
                              ) : (
                                route === 'sheet'
                                  ? (
                                    <Sheet onRouteChange={this.onRouteChange} />
                                  ) : (
                                    route === 'partupload'
                                      ? (
                                        <PartUpload onRouteChange={this.onRouteChange} />
                                      ) : (
                                        <h1> Error </h1>
                                      )
                                  )
                              )
                          )
                      )
                  )
              )
          )
        }
      </div>
    );
  }
}

export default App;
