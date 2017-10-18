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
      people: [{id: 11701, name: 'Angelina Jolie'}, {id: 287, name: 'Brad Pitt'}, {id: undefined, name: 'sdasdadasdasd'}],
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
      // get id from api
      getPersonId(value).then(data => {
        let person
        if (data.data.results.length) {
          person = {
            id: data.data.results[0].id,
            name: data.data.results[0].name
          }
        } else {
          person = {
            id: undefined,
            name: value
          }
        }
        // update state
        this.updateFilterState('people', [...this.state.people, person])
      })
    }
  }
  updateFilterAge (value) {
    this.updateFilterState('age', value)
  }

  updateFilterGenre (value) {
    this.updateFilterState('genres', value)
  }
  updateFilterDate (value) {
    this.updateFilterState('date', value)
  }
  deleteFilterPeople (value) {
    var newArray = this.state.people
    newArray.splice(value, 1)
    this.updateFilterState('people', newArray)
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
    var moviesUrl = generateUrl(this.state)

    sendData(moviesUrl).then(data => {
      this.setState({
        ajaxData: data.data.results
      })
    })
  }

  /* COMPONENT METHODS */
  componentWillMount () {
    this.getFilteredMovies()
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
            <Main allMovies={this.state.ajaxData} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
