import React from 'react'

import './row.scss'

const Row = ({left, middle, right, mb=16}) => {


  return (
    <div className="sign-in-form_row" style={{marginBottom: mb+'px'}}>
      <label>
        {left}
      </label>
      {middle}
      <span>
        {right}
      </span>
        
      
    </div>
  )
}
export default Row