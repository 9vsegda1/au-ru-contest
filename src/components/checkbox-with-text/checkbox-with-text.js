import React from 'react'

import './checkbox-with-text.scss'

const CheckboxWithText = ({text, checkboxToggle, checked}) => {
  return (
    <React.Fragment >
      <input checked={checked} onChange={checkboxToggle} className="custom-checkbox" type="checkbox" id="emailCheckbox" name="emailCheckbox"/>
      <label htmlFor="emailCheckbox"  className="checkbox_label">
        
        {text}
      </label>
    </React.Fragment>
  )
}

export default CheckboxWithText
