import React, {useState} from 'react'

import Hr from '../hr'
import Row from '../row'
import Select from '../select'
import SubmitButton from '../submit-button'
import {Input, InputWithEye} from '../input'
import CheckBoxWithText from '../checkbox-with-text'

import {compose, withValidation, withData} from '../hoc-helper'
import newDate from '../../tools/new-date'

import './sign-in-form.scss'


const SignInForm = ({changeItem, city, data,
  password, repeatPassword, email,
  handleUserInput, validation,
  subscribe, checkboxToggle,
  onSubmit, formValid,
  submitHandler,
  isLoading}) => {
    
  const {emailValid, passwordValid, passwordRepeatValid, formErrors, firstView} = validation

  const [date, setDate] = useState('15 мая 2012 в 14:55:17')

  const passwordInput = 
    <InputWithEye 
      isOk={passwordValid || firstView} 
      notOkMessage={formErrors.password}
      name="password" 
      value={password} 
      onChange={handleUserInput}
    />

  const repeatPasswordInput = 
    <InputWithEye 
      isOk={passwordRepeatValid || firstView} 
      notOkMessage={formErrors.passwordRepeat}
      name="passwordRepeat" 
      value={repeatPassword} 
      onChange={handleUserInput}
    />
  
  const emailInput = 
    <Input 
      isOk={emailValid || firstView} 
      notOkMessage={formErrors.email}
      name="email" 
      value={email} 
      onChange={handleUserInput}
    />

    
  const select = 
    <Select 
      city={city} 
      setCity={changeItem} data={data}
    />

  const checkBox = 
    <CheckBoxWithText checked={subscribe} checkboxToggle={checkboxToggle} text='принимать актуальную информацию на емейл'/>

  const lastRow = 
    <SubmitButton 
      formValid={formValid}
      date={date} 
      isLoading={isLoading} 
    />


  const formSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault()
    
    const dataFromFields = onSubmit()
    setDate(newDate())

    submitHandler({
      ...dataFromFields,
      cityId: city,
      date
    })
  }


  
  return (
    <form onSubmit={formSubmit}>
      <Row left={'Ваш город'} middle={select} mb={32}/>
      <Hr/>
      <Row left={'Пароль'} middle={passwordInput} right={'Ваш новый пароль должен содержать не менее 5 символов'}/>
      <Row left={'Пароль еще раз'} middle={repeatPasswordInput} right={'Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки'}/>
      <Hr style={{marginTop: '23px'}}/>
      <Row left={'Электронная почта'} middle={emailInput} right={'Можно изменить адрес, указанный при регистрации'}/>
      <Row left={'Я согласен'} middle={checkBox} />
      <Row middle={lastRow} />
    </form>
  )
}

export default compose(
    withData,
    withValidation
  )(SignInForm)






