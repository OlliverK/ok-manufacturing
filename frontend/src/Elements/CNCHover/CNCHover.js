import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { materials } from './Materials'
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
// import 'semantic-ui-css/semantic.css';

const CNCHover = () => (<div className='pa5'><Dropdown placeholder='Select Material' fluid selection options={materials} /></div>)

export default CNCHover