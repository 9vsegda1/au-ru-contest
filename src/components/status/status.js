import React from 'react'

import StatusInput from '../status-input'

import './status.scss'

export default class Status extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      status: 'Прежде чем действовать, надо понять',
      inputV: '',
      isHidden: true
    }
    this.inputRef = React.createRef()
  }

  changeStatus = () => {
    this.setState({isHidden: false})
    this.setState((state, props) => {
      return {inputV: state.status };
    })
    this.inputRef.current.focus(); 
    this.inputRef.current.select(); 
    
  }

  myBlur = () => {
    this.onBlur()
  }

  componentDidUpdate() {
    if (!this.state.isHidden) {
      this.inputRef.current.focus();  
      
    }
  }

  onBlur = () => {    
    this.setState(state => {
      return {
        status: state.inputV,
        isHidden: true
      }
    })    
  }

  onChangeInput = (e) => {
    this.setState({inputV: e.target.value})
  }

  handleKeyDown = (e) => {    

    if (e.key === 'Enter') {
      this.onBlur()
    } else if (e.key === 'Escape') {
      this.setState(state => {
        return {
          inputV: state.status
        }
      })
      this.onBlur()
    }
  }
  
  render  () {
    const {onBlur, isHidden, inputV} = this.state
    return (
      <div className="status">
        <p 
          onClick={this.changeStatus} 
          className="status__change" 
        >Сменить статус </p>

        <span className="status__current">
          <StatusInput 
            myBlur={this.myBlur} 
            rref={this.inputRef} 
            onBlur={onBlur} 
            isHidden={isHidden} 
            inputV={inputV} 
            onChangeInput={this.onChangeInput}
            onKeyDown={this.handleKeyDown}
          />
          {this.state.status}
        </span>
      </div>
    
    )
  }
}


