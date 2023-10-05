import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';

const Main = () => {
    const [open,setOpen]=useState(true)
  return (
    <div>
      <Modal open={open} center onClose={()=>setOpen(open=>!open)}>
        
      </Modal>
    </div>
  )
}

export default Main
