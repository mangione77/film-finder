import React, { Component } from 'react'
import People from './People'
class App extends Component {
  constructor () {
    super()
    this.state = {
      algo: '',
      people: []
    }
    this.getValuePeople = this.getValuePeople.bind(this)
  }
  getValuePeople (value) {
    this.setState({
      people: [...this.state.people, value]
    })
    console.log(this.state)
  }

  render () {
    return (
      <People onSubmit={this.getValuePeople} people={this.state.people} />
    )
  }
}

export default App
