import React, { useState } from 'react'

import 'react-responsive-modal/styles.css';
import Topbar from './topbar';
import Textarea from './textarea';
import Bottombar from './bottombar';
import './main.css'
const Main = () => {
  
  
  return (
    <>
      <div className='main-container'>   
          <div className='small-container'>            
              <Topbar/>
              <Textarea  />
              <Bottombar/>     
            </div>     
             
      </div>
    </>
  )
}

export default Main
