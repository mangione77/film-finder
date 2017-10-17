import React, { Component } from 'react'

class PeopleInput extends Component {
  constructor () {
    super()

  }

  handleSubmit () {

  }

  handleChange () {

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.onChange} />
      </form>
    )
  }
}

export default PeopleInput
