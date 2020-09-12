import React from 'react'
import './header.scss'
import Status from '../status'
const Header = () => {
  return   (
    <div className="app__header">
      <h1><span>Здравствуйте,</span> Человек №3596941</h1> 
      <Status />
    </div>
  )
}

export default Header