import React from 'react'

import Input from './input'

const InputWithEye = (View) => {
  return class extends React.Component {
    state = {
      isVisible: false
    }

    visibleChange = () => {
      this.setState(state => {
        return {
          isVisible: !state.isVisible
        }
        
      })
    } 

    render() {
      return (
        <div className="sing-in-form_input__anchor">
          <View {...this.props} isVisible={this.state.isVisible} />
          <i 
            className="far fa-eye input_eye"
            onClick={this.visibleChange}
          ></i>
        </div>
      )
    }
  }
}

export default InputWithEye(Input)