import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({ onRouteChange }) => {
    return (
        <nav className='fixed'>
            <div className='form dt dt--fixed w-200 bgdark'>
                <h1 className='tOK tl dtc'>OK-Manufacturing</h1>
                <div className='paright dtc tr'>
                    <h5
                        onClick={() => onRouteChange('main')}
                        className='tr pa2 inline white f4 pointer'>
                        Home
                    </h5>
                    <h5 className='tr pa2 inline white f4'> Quote </h5>
                    <h5 className='tr pa3 inline white f4'> About </h5>
                    <FontAwesomeIcon icon="shopping-cart" className='pointer tOK paright' />
                </div>
            </div>
        </nav>
    );
}

export default NavBar