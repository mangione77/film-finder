import React, { Component } from 'react'
import People from './People'
import Sliderbar from './Slider'
import Age from './Age'

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
      <div>
      <People onSubmit={this.getValuePeople} people={this.state.people} />
        <Sliderbar />
      </div>
    )
  }
}

export default App
