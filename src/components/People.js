import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
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
    this.props.onSubmit(this.state.value, 'people')
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
        <div>
          <ListGroup componentClass='ul'>
            {
              this.props.people.map((item, i) => (
                <div>{item}</div>
              ))
            }
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default People
