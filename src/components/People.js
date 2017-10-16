import React, { Component } from 'react'
// import PeopleInput from './PeopleInput'

class People extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.value)
    this.setState({
      value: ''
    })
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })

  }
  render () {
    return (
      <div>
        <label htmlFor='people'>Actor / Director:</label>
        <form onSubmit={this.handleSubmit}>
          <input id='people' type='text' onChange={this.handleChange} value={this.state.value} />
        </form>
      </div>
    )
  }
}

export default People
