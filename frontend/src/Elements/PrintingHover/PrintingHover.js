import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { heat } from './Heat';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
// import 'semantic-ui-css/semantic.css';

const PrintingHover = (onButtonSubmitCart) => {
    return(
        <div className='pa3 selector'>
            <div className='pa2 w5 bg-white br4'>
                <h2 className='tOK center'>CNC</h2>
                <div className=''>
                    <div className='center pa1'>
                        <h3 className='dtc tl'>Cost:</h3>
                        <h3>0$</h3>
                    </div>
                    <div className='center pa1'>
                        <h3 className='dtc tr'>Delivery date:</h3>
                        <h3>00/00/0000</h3>
                    </div>
                </div>
                <hr></hr>
                <h3>Qwality</h3>
                <Dropdown placeholder='Select Material' fluid selection options={heat} />
                <h3>Material</h3>
                <Dropdown placeholder='Select Machinary' fluid selection options={heat} />
                <h3>Color</h3>
                <Dropdown placeholder='Select Machinary' fluid selection options={heat} />
                <br/>
                <button onClick={onButtonSubmitCart}
                className='btn center grow link white bgOK shadow-5 pointer bn'><h4>ADD to Cart</h4></button>
            </div>
        </div>
    )  
}


export default PrintingHover