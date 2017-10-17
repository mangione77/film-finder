import React, { Component } from 'react'
import {Sliderbar} from './Sliderbar'
import People from './People'
import Age from './Age'
<<<<<<< HEAD
import Genres from './Genres'

=======
import {ResetButton} from './ResetButton'
import {sendData} from './api'
>>>>>>> fa616e0f2ef057c6c8bcef7168644741850562c9

class App extends Component {
  constructor () {
    super()

    const newDate = new Date()
    this.currentYear = newDate.getFullYear()  
    this.state = {
      people: [],
      genres: [],
<<<<<<< HEAD
      age: 21,
      date: {}
    }
    this.getValuePeople = this.getValuePeople.bind(this)
    this.getAgeValue = this.getAgeValue.bind(this)
    this.getGenresValue = this.getGenresValue.bind(this)
=======
      age: 0,
      date: [1895, this.currentYear],
      ajaxData: []
    }
    this.getValuePeople = this.getValuePeople.bind(this)
    this.getAgeValue = this.getAgeValue.bind(this)
    this.getReset = this.getReset.bind(this)
    this.getValueSliderBar = this.getValueSliderBar.bind(this)
    this.deleteValuePeople = this.deleteValuePeople.bind(this)
>>>>>>> fa616e0f2ef057c6c8bcef7168644741850562c9
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
  componentDidUpdate () {
    console.log(this.state.age)
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

<<<<<<< HEAD
  getGenresValue(value) {
    this.setState({
      genres:value
    })
  }

=======
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

>>>>>>> fa616e0f2ef057c6c8bcef7168644741850562c9
  render () {
    return (
      <div>
        <People onSubmit={this.getValuePeople} people={this.state.people} />
        <Age age={this.state.age} onAgeClick={this.getAgeValue} />
        <Sliderbar dataValue={this.state.date} currentValue={this.getValueSliderBar} defaultValue={[1895, this.currentYear]} />
        <ResetButton foo={this.getReset} />
        <People
          onSubmit={this.getValuePeople}
          people={this.state.people}
          onDelete={this.deleteValuePeople}
        />
        <Age age={this.state.age} onAgeClick={this.getAgeValue} />
        <Sliderbar />
      <Genres onGenreClick={this.getGenresValue} />
      </div>
    )
  }
}

export default App
