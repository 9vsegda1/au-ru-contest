import React from 'react'


import DummyAPI from '../../tools/DummyAPI'
import dataFilter from '../../tools/data-filer'


const withData = (View) => {
  return class extends React.Component {

    constructor(props) {
      super(props)
      this.API = new DummyAPI()

      this.data = dataFilter(this.API.getData())

      this.state = {
        city: this.data[0].id
      }
    }

    changeItem = (id) => {
      this.setState({
        city: id
      })
    }

    render() {
      return <View {...this.props} data={this.data} city={this.state.city} changeItem={this.changeItem}/>
    }
  }
}

export default withData
