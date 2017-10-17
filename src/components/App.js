import React, { Component } from 'react'
import {Sliderbar} from './Sliderbar'
import People from './People'
import Age from './Age'
import Genres from './Genres'

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: [],
      genres: {
        action:false,
        adventure:false,
        comedy:false,
        drama:false,
        horror:false,
        science_fiction:false
      },
      age: 0,
      date: {}
    }
    this.getValuePeople = this.getValuePeople.bind(this)
    this.getAgeValue = this.getAgeValue.bind(this)
  }

  getValuePeople (value) {
    this.setState({
      people: [...this.state.people, value]
    })
    console.log(this.state)
  }

  getAgeValue (value) {
    this.setState({
      age:value
    })
  }

  componentDidUpdate() {
    console.log(this.state.age)
  }


  
  render () {
    return (
      <div>
      <People onSubmit={this.getValuePeople} people={this.state.people} />
      <Age age={this.state.age} onAgeClick={this.getAgeValue} />
        <Sliderbar />
      </div>
    )
  }
}

export default App
