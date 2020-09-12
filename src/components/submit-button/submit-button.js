import React from 'react'
import Spinner from '../spinner/spinner'

import './submit-button.scss'

const SubmitButton = ({formValid, date, isLoading}) => {
  
  const isDisabled = isLoading || !formValid



  const subject = isLoading ? <Spinner/> : 'Изменить'

  

  return (
    <div className="button_container">
      <button 
        disabled={isDisabled} 
        type="submit" 
        className="submit-button"
      >{subject}</button>
      <span className="button_time">последние изменения {date}</span>
    </div>
    
  )
}

export default SubmitButton
