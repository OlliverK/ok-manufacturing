import React from 'react';

const NavBar = ({ onRouteChange }) => {
    return (
        <nav className='fixed'>
            <div className='form dt dt--fixed w-200 bgdark'>
                <h1 className='tOK tl dtc'>OK-Manufacturing</h1>
                <div className='dtc tr'>
                    <h5
                        onClick={() => onRouteChange('main')}
                        className='tr pa1 inline white f4 pointer'>
                        Home
                    </h5>
                    <h5 className='tr pa1 inline white f4'> Quote </h5>
                    <h5 className='tr pa1 inline white f4'> About </h5>
                </div>
            </div>
        </nav>
    );
}

export default NavBar