import React, { Component } from 'react'
import {Sliderbar} from './Sliderbar'
import People from './People'
import Age from './Age'
import {sendData} from './api'

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: [],
      genres: [],
      age: 0,
      date: {},
      ajaxData: []
    }
    this.getValuePeople = this.getValuePeople.bind(this)
    this.getAgeValue = this.getAgeValue.bind(this)
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
