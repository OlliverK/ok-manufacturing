import React from 'react';
import picture from './1.jpg'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
import {manufac} from './Manufac'


const PartCard = (onRouteChange) => {
    return(
        <div className='center'>
            <div onClick={() => onRouteChange('cnc')} className='br4 shadow-5 w5 bgdark' >
                <h2 className='center tOK'>Connector</h2>
                <div className='tOK'>
                    <div className='center'>
                        <h3 className='dtc tl'>Cost:</h3>
                        <h3>0$</h3>
                    </div>
                </div>
                <img className='center br4 grow' alt='' src={picture} width="150" height="150"/>
                <br/>
                <div className='pa2'>
                    <Dropdown placeholder='' fluid selection options={manufac} />
                </div>
            </div>
        </div>
    )
}

export default PartCard