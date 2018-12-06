import React from 'react';
import NavBar from '../NavBar/NavBar'


const PartCard = (onRouteChange) => {
    return(
        <div>
            <NavBar/>
            <div className='inmidle'>
            <h1 className='center f1'>404</h1>
            <h2  className='center'>I talled him that we need to patch this hole.....</h2>
            <h2  className='center'>Press here and proove me right))))</h2>
            <button onClick={() => onRouteChange('main')} className='btn center grow f4 link white black bgOK shadow-5 pointer bn'>Please press i bet 50$ on it</button>
        </div>
        </div>
    )
}

export default PartCard