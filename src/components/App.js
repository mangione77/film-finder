import React, { Component } from 'react'
import {Sliderbar} from './Sliderbar'
import People from './People'
import Age from './Age'
import {ResetButton} from './ResetButton'

class App extends Component {
  constructor () {
    super()

    const newDate = new Date()
    this.currentYear = newDate.getFullYear()  
    this.state = {
      people: [],
      genres: [],
      age: 0,
      date: [1895, this.currentYear]
    }
    this.getValuePeople = this.getValuePeople.bind(this)
    this.getAgeValue = this.getAgeValue.bind(this)
    this.getReset = this.getReset.bind(this)
    this.getValueSliderBar = this.getValueSliderBar.bind(this)
  }

  getValuePeople (value) {
    this.setState({
      people: [...this.state.people, value]
    })
    console.log(this.state)
  }

  getValueSliderBar (value) {
    this.setState({
      date: value
    })
  }

  getAgeValue (value) {
    this.setState({
      age: value
    })
  }

  getReset () {
    this.setState({
      people: [],
      genres: [],
      age: 21,
      date: [1895, this.currentYear]
    })
    console.log(this.state)
  }

  componentDidUpdate () {
    console.log(this.state.date)

  }

  render () {
    return (
      <div>
        <People onSubmit={this.getValuePeople} people={this.state.people} />
        <Age age={this.state.age} onAgeClick={this.getAgeValue} />
        <Sliderbar dataValue={this.state.date} currentValue={this.getValueSliderBar} defaultValue={[1895, this.currentYear]} />
        <ResetButton foo={this.getReset} />
      </div>
    )
  }
}

export default App
