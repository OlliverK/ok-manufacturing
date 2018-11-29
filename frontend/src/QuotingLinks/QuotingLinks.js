import React from 'react';
import './QuotingLinks.css'

const QuotingLinks = ({ onRouteChange }) => {

  return (
    <div className=' bgdark'>
      
      <div className='center pa0'>
      <div onClick={() => onRouteChange('cnc')} className='link w-50 dt hide-child br2 cover bg-center one bgOK1'>
      <span className="white dtc v-mid w-50 child bgOK1 pad">
            <h1 className='center'>CNC Machining</h1>
        </span>
      </div>
      <div className='link w-50 dt hide-child br2 cover bg-center two bgOK1'>
      <span className="white dtc v-mid w-50 child bgOK1 pad">
            <h1 className='center'>3D-Printing</h1>
        </span>
      </div>
      <div className='link w-50 dt hide-child br2 cover bg-center three bgOK1'>
      <span className="white dtc v-mid w-50 child bgOK1 pad">
            <h1 className='center'>Plasma Cutting</h1>
        </span>
      </div>
      </div>
      <div className='center pa0'>
      <div className='link w-50 dt hide-child br2 cover bg-center fore bgOK1'>
      <span className="white dtc v-mid w-50 child bgOK1 pad">
            <h1 className='center'>Casting</h1>
        </span>
      </div>
      <div className='link w-50 dt hide-child br2 cover bg-center five bgOK1'>
      <span className="white dtc v-mid w-50 child bgOK1 pad">
            <h1 className='center'>Electronics</h1>
        </span>
      </div>
      <div className='link w-50 dt hide-child br2 cover bg-center six bgOK1'>
      <span className="white dtc v-mid w-50 child bgOK1 pad">
            <h1 className='center'>Sheet Metal</h1>
        </span>
      </div>
      </div>
    </div>
  );
}
export default QuotingLinks

