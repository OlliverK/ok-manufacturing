import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.css'
import Popup from 'reactjs-popup';



const Services = () => {
    return(
        <div className='bgdark pa2'>
        <div className='f2 bgdark tc center tOK'>
           <h1> Services </h1>
        </div>
        <div className='HeightPad'><hr></hr></div>
            <div className='bgdark tc center'>
                
            <div className='iconPadding'>
                    <Popup
                        trigger={
                        <button className='hover grow pointer bgdark bn'>
                        <FontAwesomeIcon icon="gem" className='fa-5x tOK' />
                        <h5 className='f4 white'>Quality Guarantee</h5>
                        </button>}
                        position="bottom center"
                        on="hover">        
                <div >
                <h5 className='f3'>We guarantee the qwality of our component or a 100% refund</h5>
                </div>
                </Popup>
            </div>

            <div className='iconPadding'>
                    <Popup
                        trigger={
                        <button className='hover grow pointer bgdark bn'>
                        <FontAwesomeIcon icon="truck" className='fa-5x tOK' />
                        <h5 className='f4 white'>Free Shipping</h5>
                        </button>}
                        position="bottom center"
                        on="hover">        
                <div >
                <h5 className='f3'>All of your orders are delivered to US on time and for free</h5>
                </div>
                </Popup>
                </div>
                
                <div className='iconPadding'>
                    <Popup
                        trigger={
                        <button className='hover grow pointer bgdark bn'>
                        <FontAwesomeIcon icon="clock" className='fa-5x tOK' />
                        <h5 className='f4 white'>Free Shipping</h5>
                        </button>}
                        position="bottom center"
                        on="hover">        
                <div >
                <h5 className='f3'>We provide you with an instant price for your full order.</h5>
                </div>
                </Popup>
            </div>

            <div className='iconPadding'>
                    <Popup
                        trigger={
                        <button className='hover grow pointer bgdark bn'>
                        <FontAwesomeIcon icon="flag-usa" className='fa-5x tOK' />
                        <h5 className='f4 white'>Free Shipping</h5>
                        </button>}
                        position="bottom center"
                        on="hover">        
                <div >
                <h5 className='f3'>All of our orders are processed in USA.</h5>
                </div>
                </Popup>
            </div>             

            </div>
            
            
            
        </div>
    )
}

export default Services