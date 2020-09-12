import React from 'react'

import './modal-background.scss'


const ModalBackground = ({myBlur,isHidden}) => {
  return (
    <div 
      className="status__inputinput_background" 
      onClick={myBlur}
      style={isHidden ? {display:'none'} : {display:'block', zIndex:10}}
    ></div>
  )
}

export default ModalBackground
