import React from 'react'
import { useState } from 'react'

import Header from '../header'
import SignInForm from '../sign-in-form'

import './app.scss'


const App = () => {

  const [isLoading, setIsLoading] = useState(false)

  const getResult = (result) => {
    setIsLoading(true)
    console.log('loading...')

    setTimeout(() => {
      setIsLoading(false)
      console.log(JSON.stringify(result))
    }, 3000)
    
    return result
  }

  return (
    <div className="app-container">
      <Header />
      <SignInForm isLoading={isLoading} submitHandler={getResult}/>
    </div>
  )
}


export default App
