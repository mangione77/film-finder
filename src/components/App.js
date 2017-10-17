import React, { Component } from 'react'
import {Sliderbar} from './Sliderbar'
import People from './People'
import Age from './Age'

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: [],
      genres: [],
      age: 0,
      date: {}
    }
    this.getValuePeople = this.getValuePeople.bind(this)
    this.getAgeValue = this.getAgeValue.bind(this)
    this.deleteValuePeople = this.deleteValuePeople.bind(this)
  }
  getValuePeople (value) {
    if (value.trim().length) {
      this.setState({
        people: [...this.state.people, value.trim()]
      })
    }
  }
  deleteValuePeople (value) {
    var newArray = this.state.people
    newArray.splice(value, 1)
    this.setState({
      people: newArray
    })
  }
  getAgeValue (value) {
    this.setState({
      age: value
    })
  }
  componentDidUpdate () {
    console.log(this.state.age)
  }
  render () {
    return (
      <div>
        <People
          onSubmit={this.getValuePeople}
          people={this.state.people}
          onDelete={this.deleteValuePeople}
        />
        <Age age={this.state.age} onAgeClick={this.getAgeValue} />
        <Sliderbar />
      </div>
    )
  }
}

export default App
