import React, { Component } from 'react'
<<<<<<< HEAD
import {Sliderbar} from './Sliderbar'
=======
import People from './People'
import Sliderbar from './Slider'
>>>>>>> 08e8857444309089e5d7a48309cf1f486d0e719a
import Age from './Age'

class App extends Component {
  constructor () {
    super()
    this.state = {
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
