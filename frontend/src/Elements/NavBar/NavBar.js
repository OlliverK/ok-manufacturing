import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({ onRouteChange, onScroll }) => {
    
    return (
        <nav className='fixed'>
            <div className='form dt dt--fixed w-200 bgdark'>
                <h1 onClick={() => onRouteChange('main')} className={'tOK tl dtc pointer pasides'+ onScroll}>OK-Manufacturing</h1>
                <div className='paright dtc tr'>
                    <h5
                        onClick={() => onRouteChange('main')}
                        className='tr inline white f4 pointer pasides'>
                        Home
                    </h5>
                    <h5 className='tr inline white f4 pasides'> Quote </h5>
                    <h5 className='tr inline white f4 pasides'> About </h5>
                    <FontAwesomeIcon onClick={() => onRouteChange('partupload')} icon="shopping-cart" className='pointer tOK paright pasides' />
                </div>
            </div>
        </nav>
    );
}

export default NavBar