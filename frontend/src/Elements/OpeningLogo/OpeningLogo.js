import React from 'react';

const OpeningLogo= ({onRouteChange , onButtonSubmit2}) => {
    return(
        <div style={{ width: 'auto', height: '100vh' }} className='OpeningPic paOpeningLogo f1'>
            <h1 className='f1 center front tOK tShadow'>OK-Manufacturing</h1>
            <h5 className='f4 white center tShadow'>Here we are going to write some thing ammazing about our company so that costomer can see it</h5><br/><br/><br/>
            <button onClick={() => onRouteChange('partupload')}
            className='btn center grow f4 ttu link white black bgOK shadow-5 pointer bn'><h2>Quote Now</h2></button>
            <br/>
            <button onClick={onButtonSubmit2}
            className='btn center grow f6 link white bgdark shadow-5 pointer bn'><h2  >Learn More</h2></button>
        </div>
    )
}

export default OpeningLogo
