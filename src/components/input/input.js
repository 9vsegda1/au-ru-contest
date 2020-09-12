import React from 'react'

import './input.scss'



const Input = ({onChange, isVisible=true, isOk=true, value='', name='noname', notOkMessage=''}) => {
  const cls = "sing-in-form_input " + (isOk ? '' : 'sing-in-form_input__red')
  
  const type = isVisible ? 'text' : 'password' 

  const errorMessage = notOkMessage ? <p className="sing-in-form_input_error">{notOkMessage}</p> : <p className="sing-in-form_input_error"></p>



  return (
    <div className="sing-in-form_input_root">
      <input 
        name={name}
        required
        value={value}
        onChange={onChange}
        className={cls}
        type={type}
      />
      {errorMessage}
    </div>
  )
}

export default Input
