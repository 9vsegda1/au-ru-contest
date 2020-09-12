import React from 'react'

import './status-input.scss'
import ModalBackground from '../modal-background'

const StatusInput = (props) => {

  const {
    rref, 
    isHidden, 
    onBlur,
    inputV, 
    onChangeInput, 
    myBlur, 
    onKeyDown
  } = props
  return (
        
    <React.Fragment>
      <ModalBackground myBlur={myBlur} isHidden={isHidden}/>
      <input 
        onKeyDown={onKeyDown}
        hidden={isHidden}
        ref={rref}
        onBlur={onBlur}
        className="status__input"
        type="text" 
        value={inputV}
        onChange={onChangeInput} 
        style={{zIndex:100}}

      />
    </React.Fragment>
  )

}

export default StatusInput
