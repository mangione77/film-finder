import React, { Component } from 'react'
import { Main } from './Main'
import {sendData, generateUrl, getPersonId} from './api'
import { Sidebar } from './Sidebar'

import './App.css'

import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  constructor () {
    super()

    const newDate = new Date()
    this.currentYear = newDate.getFullYear()
    this.state = {
      people: [{name: 'angelina jolie', id: 1160}, {name: 'dfvaudyvaudysv', id: undefined}],
      genres: [28, 35],
      age: '',
      date: [1895, this.currentYear],
      sort: 'popularity.desc',
      ajaxData: [],
      page: 1,
      movies: [],
      filters: {}
    }
    this.updateFilterState = this.updateFilterState.bind(this)
    this.updateFilterPeople = this.updateFilterPeople.bind(this)
    this.updateFilterAge = this.updateFilterAge.bind(this)
    this.updateFilterGenre = this.updateFilterGenre.bind(this)
    this.updateFilterDate = this.updateFilterDate.bind(this)
    this.getReset = this.getReset.bind(this)
    this.deleteFilterPeople = this.deleteFilterPeople.bind(this)
  }

  updateFilterState (filter, value) {
    this.setState({
      [filter]: value
    }, this.getFilteredMovies())
  }

  /* GET FILTER VALUES */
  updateFilterPeople (value) {
    if (value.trim().length) {
      this.updateFilterState('people', [...this.state.people, value.trim()])
      // this.setState({
      //   people: [...this.state.people, value.trim()]
      // })
    }
  }
  updateFilterAge (value) {
    this.updateFilterState('age', value)
    // this.setState({
    //   age: value
    // })
  }

  updateFilterGenre (value) {
    this.updateFilterState('genres', value)
    // this.setState({
    //   genres: value
    // })
  }
  updateFilterDate (value) {
    this.updateFilterState('date', value)
    /*this.setState({
      date: value
    })*/
  }
  deleteFilterPeople (value) {
    var newArray = this.state.people
    newArray.splice(value, 1)
    this.updateFilterState('people', newArray)
    // this.setState({
    //   people: newArray
    // })
  }
  getReset () {
    this.setState({
      people: [],
      genres: [],
      age: 21,
      date: [1895, this.currentYear]
    })
  }
  /* GET DATA AJAX: filtered movies */
  getFilteredMovies () {
    console.log('getFilteredMovies filtered moviess...')
    // generateUrl(this.state)
    // .then(data => {
    // })
    // sendData(apiUrl).then(data => {
    //   console.log(data.data.results)
    //   this.setState({
    //     ajaxData: data.data.results
    //   })
    //   console.log(data)
    // })
  }

  /* COMPONENT METHODS */
  componentWillMount () {
    this.getFilteredMovies()
  }
  /*componentWillUpdate () {
    this.getFilteredMovies()
  }*/
  componentDidMount () {
    console.log(this.state)
  }
  componentDidUpdate () {
    console.log(this.state)
  }

  render () {
    return (
      <Grid className='fluid'>
        <Row>
          <Col className='sideBar' xs={6} md={4}>
            <Sidebar
              people={this.state.people} onSubmit={this.updateFilterPeople} onDelete={this.deleteFilterPeople}
              age={this.state.age} onAgeClick={this.updateFilterAge}
              onGenreClick={this.updateFilterGenre}
              data={this.state.date} currentValue={this.updateFilterDate} defaultValue={[1895, this.currentYear]}
              resetData={this.getReset}
            />
          </Col>
          <Col xs={6} md={8}>
            <Main />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
