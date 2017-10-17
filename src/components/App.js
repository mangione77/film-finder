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
      genres: [],
      age: 21,
      date: {}
    }
    this.getValuePeople = this.getValuePeople.bind(this)
    this.getAgeValue = this.getAgeValue.bind(this)
    this.getGenresValue = this.getGenresValue.bind(this)
  }

  getValuePeople (value) {
    this.setState({
      people: [...this.state.people, value]
    })
  }

  getAgeValue (value) {
    this.setState({
      age:value
    })
  }

  getGenresValue(value) {
    this.setState({
      genres:value
    })
  }

  render () {
    return (
      <div>
      <People onSubmit={this.getValuePeople} people={this.state.people} />
      <Age age={this.state.age} onAgeClick={this.getAgeValue} />
        <Sliderbar />
      <Genres onGenreClick={this.getGenresValue} />
      </div>
    )
  }
}

export default App
