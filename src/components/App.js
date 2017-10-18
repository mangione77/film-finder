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
      filters: {
        people: [],
        genres: [],
        age: '',
        date: [1895, this.currentYear],
        sort: 'popularity.desc',
        page: 1
      },
      movies: []
    }
    this.updateFilterState = this.updateFilterState.bind(this)
    this.updateFilterPeople = this.updateFilterPeople.bind(this)
    this.updateFilterAge = this.updateFilterAge.bind(this)
    this.updateFilterGenre = this.updateFilterGenre.bind(this)
    this.updateFilterDate = this.updateFilterDate.bind(this)
    this.getReset = this.getReset.bind(this)
    this.deleteFilterPeople = this.deleteFilterPeople.bind(this)
    this.deleteFilterGenre = this.deleteFilterGenre.bind(this)
  }

  updateFilterState (filter, value) {
    let filters = Object.assign({}, this.state.filters)
    filters[filter] = value
    this.setState({filters}, this.getFilteredMovies)
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
        console.log(this.state.filters.people)
        this.updateFilterState('people', [...this.state.filters.people, person])
      })
    }
  }
  updateFilterAge (value) {
    this.updateFilterState('age', value)
  }

  updateFilterGenre (value) {
    this.updateFilterState('genres', [...this.state.filters.genres, value])
  }
  updateFilterDate (value) {
    this.updateFilterState('date', value)
  }
  deleteFilterPeople (value) {
    var newArray = this.state.filters.people
    newArray.splice(value, 1)
    this.updateFilterState('people', newArray)
  }
  deleteFilterGenre (e) {
    let newArray = this.state.filters.genres
    const pos = newArray.indexOf(e.target.id)
    newArray.splice(pos, 1)
    this.updateFilterState('genres', newArray)
  }
  getReset () {
    this.setState({
      people: [],
      genres: [],
      age: '',
      date: [1895, this.currentYear]
    })
  }

  /* GET FILTERED MOVIES */
  getFilteredMovies () {
    var moviesUrl = generateUrl(this.state.filters)
    sendData(moviesUrl).then(data => {
      this.setState({
        movies: data.data.results
      })
    })
  }

  /* COMPONENT METHODS */
  componentDidMount () {
    this.getFilteredMovies()
  }
  componentDidUpdate () {
    // console.log('update', this.state)
  }

  render () {
    return (
      <Grid className='fluid background'>
        <Row className='grid'>
          <Col className='sideBar' xs={6} md={4}>
            <Sidebar
              people={this.state.filters.people}
              onSubmit={this.updateFilterPeople}
              onDelete={this.deleteFilterPeople}
              age={this.state.filters.age}
              onAgeClick={this.updateFilterAge}
              data={this.state.filters.date}
              currentValue={this.updateFilterDate}
              defaultValue={[1895, this.currentYear]}
              genreValue={this.state.filters.genres}
              genreAdd={this.updateFilterGenre}
              genreDelete={this.deleteFilterGenre}
              resetData={this.getReset}
            />
          </Col>
          <Col className='main' xs={6} md={8}>
            <Main allMovies={this.state.movies} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
