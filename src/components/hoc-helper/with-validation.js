import React from 'react'


const withValidation = (View) => {
  return class extends React.Component {
    state = {
      password: '',
      passwordRepeat: '',
      email: '', 
      subscribe: true,
      formErrors: {email: '', password: '', passwordRepeat: ''},
      emailValid: false,
      passwordValid: false,
      passwordRepeatValid: false,
      formValid: false,
      firstView: true
    }

    handleUserInput = (e) => {
      const name = e.target.name
      const value = e.target.value
      this.setState({[name]: value}, 
        () => { this.validateField(name, value) })
      
      if (this.state.firstView)
      this.setState({
        firstView: false
      })
    }

    checkboxToggle = (e) => {
      this.setState(state => {
        return {
          subscribe: !state.subscribe
        }
      })
    }

    onSubmit = () => {
      
      const {email, password, subscribe} = this.state

      return {
        email, password, subscribe
      }
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
      let passwordRepeatValid = this.state.passwordRepeatValid
      switch(fieldName) {
        case 'email':
          if (value === '') {
            fieldValidationErrors.email = 'Укажите E-mail'
            break
          }
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          fieldValidationErrors.email = emailValid ? '' : 'Неверный E-mail'
          break
        case 'password':
          if (value === '') {
            fieldValidationErrors.password = 'Укажите пароль'
            break
          }
          passwordValid = value.length >= 5
          fieldValidationErrors.password = passwordValid ? '': 'Используйте не менее 5 символов'

          passwordRepeatValid = value === this.state.passwordRepeat
          fieldValidationErrors.passwordRepeat = passwordRepeatValid ? '': 'Пароли не совпадают'
          break
        case 'passwordRepeat':

          passwordRepeatValid = value === this.state.password
          fieldValidationErrors.passwordRepeat = passwordRepeatValid ? '': 'Пароли не совпадают'
          break
        default:
          break
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid,
                      passwordValid,
                      passwordRepeatValid
                    }, this.validateForm);
      }
      validateForm() {
        this.setState({formValid: this.state.emailValid &&
                                  this.state.passwordValid &&
                                  this.state.passwordRepeatValid});
    }

    render() {

      const {password, passwordRepeat, email, subscribe} = this.state
      const {emailValid, passwordValid, passwordRepeatValid, formErrors, formValid, firstView} = this.state
      const validation = {
        emailValid, passwordValid, passwordRepeatValid, formErrors, firstView
      }
      
      return (
        <View 
          {...this.props} 
          email={email}
          subscribe={subscribe}
          checkboxToggle={this.checkboxToggle}
          password={password} 
          validation={validation}
          repeatPassword={passwordRepeat}
          handleUserInput={this.handleUserInput}
          onSubmit={this.onSubmit}
          formValid={formValid}
        />
      )
    }
  }

}

export default withValidation
