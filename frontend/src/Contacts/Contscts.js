import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacts = () => {
    return(
        <div >
            <div>
                <div>
                    <h1 className='center tOk f1'>Contacts</h1>
                </div>
                <div className='HeightPad'><hr></hr></div>
                <div className='center pa5'>
                    <div className='hover grow pointer iconPadding'>
                        <FontAwesomeIcon icon="phone" className='fa-5x tOK center' />
                        <h5 className='f4 black center'>+1(000)000 00 00</h5>
                    </div>
                    <div className='hover grow pointer iconPadding'>
                        <FontAwesomeIcon icon="envelope" className='fa-5x tOK center' />
                        <h5 className='f4 black center'>contact.us@ok-manufacturing.com</h5>
                    </div>
                    <div className='hover grow pointer iconPadding'>
                        <FontAwesomeIcon icon="map" className='fa-5x tOK center' />
                        <h5 className='f4 black center'>Google Maps</h5>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contacts