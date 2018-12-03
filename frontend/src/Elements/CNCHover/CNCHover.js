import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { materials } from './Materials'
import { heat } from './Heat'
import { coating } from './Coating'
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
// import 'semantic-ui-css/semantic.css';

const CNCHover = (onButtonSubmitCart) => {
    return(
        <div className='pa3 selector'>
            <div className='pa2 w5 bg-white br4'>
                <h2 className='tOK center'>CNC</h2>
                <div className='center'>
                    <div className='center'>
                        <h5 className='dtc tl'>Cost:</h5>
                        <h5>0$</h5>
                    </div>
                    <div className='center'>
                        <h5 className='dtc tr'>Delivery date:</h5>
                        <h5>00/00/0000</h5>
                    </div>
                </div>
                <hr></hr>
                <h3>Material*</h3>
                <Dropdown placeholder='Select Material' fluid selection options={materials} />
                <h3>Heat treatment</h3>
                <Dropdown placeholder='Select Machinary' fluid selection options={heat} />
                <h3>Coating</h3>
                <Dropdown placeholder='Select Machinary' fluid selection options={coating} />
                <br/>
                <button onClick={onButtonSubmitCart}
                className='btn center grow link white bgOK shadow-5 pointer bn'><h4>ADD to Cart</h4></button>
            </div>
        </div>
    )  
}


export default CNCHover