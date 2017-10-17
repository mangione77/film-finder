import React, { Component } from 'react'
import {Sliderbar} from './Sliderbar'
import People from './People'
import Age from './Age'
import Genres from './Genres'
import { Main } from './Main'
import {ResetButton} from './ResetButton'
import {sendData} from './api'

class App extends Component {
  constructor () {
    super()

    const newDate = new Date()
    this.currentYear = newDate.getFullYear()
    this.state = {
      people: ['Brad Pitt', 'Angelina Jolie'],
      genres: [28, 35],
      age: '',
      date: [1895, this.currentYear],
      sort: 'popularity.desc',
      ajaxData: [],
      page: 1
    }
    this.getValuePeople = this.getValuePeople.bind(this)
    this.getGenresValue = this.getGenresValue.bind(this)
    this.getAgeValue = this.getAgeValue.bind(this)
    this.getReset = this.getReset.bind(this)
    this.getValueSliderBar = this.getValueSliderBar.bind(this)
    this.deleteValuePeople = this.deleteValuePeople.bind(this)
  }
  /* GET FILTER VALUES */
  getValuePeople (value) {
    if (value.trim().length) {
      this.setState({
        people: [...this.state.people, value.trim()]
      })
    }
  }
  getAgeValue (value) {
    this.setState({
      age: value
    })
  }
  deleteValuePeople (value) {
    var newArray = this.state.people
    newArray.splice(value, 1)
    this.setState({
      people: newArray
    })
  }

  getGenresValue (value) {
    this.setState({
      genres: value
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

  getValueSliderBar (value) {
    this.setState({
      date: value
    })
  }
  /* GET DATA AJAX */
  getAjaxData () {
    sendData(this.state).then(data => {
      console.log(data.data.results)
      this.setState({
        ajaxData: data.data.results
      })
    })
  }
  /* COMPONENT METHODS */
  componentWillMount () {
    this.getAjaxData()
  }

  componentDidUpdate () {
    console.log(this.state.age)
    console.log(this.state.date)
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
        <Sliderbar dataValue={this.state.date} currentValue={this.getValueSliderBar} defaultValue={[1895, this.currentYear]} />
        <ResetButton foo={this.getReset} />
        <Genres onGenreClick={this.getGenresValue} />
        <Main
          results={this.state.ajaxData} />
      </div>
    )
  }
}

export default App
