import React, { Component } from 'react'
import {Sliderbar} from './Sliderbar'
import People from './People'
import Age from './Age'

class App extends Component {
  constructor () {
    super()
    this.state = {
<<<<<<< HEAD
      people: [],
      genres: [],
      age: 0,
      date: {}
=======
      people: []
>>>>>>> 8021690e7da3663390a91b959083b06996c0bf52
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
