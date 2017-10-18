import React, { Component } from 'react'

class Genres extends Component {
  constructor (props) {
    super(props)

    this.state = {
      genres: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearGenres = this.clearGenres.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    if (this.state.genres.includes(event.target.id) === false) {
      // sets component state to the id of the genre button clicked
      this.setState({
        genres: this.state.genres.concat(event.target.id)
      })
      // concats the genres to the app main state
      this.props.onGenreClick(this.state.genres)
    }
  }

  handleSubmit () {
    console.log('clicked')
  }
  clearGenres () {
    this.setState({
      genres: []
    })
    this.props.onGenreClick([])
  }
  componentDidUpdate () {
    // console.log(this.state.genres)
  }
  render () {
    return (
      <div className='genres-group'>
        <button className='genre-btn' name='action' id='28' onClick={this.handleClick}>Action</button>
        <button className='genre-btn' name='adventure' id='12' onClick={this.handleClick}>Adventure</button>
        <button className='genre-btn' name='animation' id='16' onClick={this.handleClick}>Animation</button>
        <button className='genre-btn' name='comedy' id='35' onClick={this.handleClick}>Comedy</button>
        <button className='genre-btn' name='crime' id='80' onClick={this.handleClick}>Crime</button>
        <button className='genre-btn' name='documentary' id='99' onClick={this.handleClick}>Documentary</button>
        <button className='genre-btn' name='drama' id='18' onClick={this.handleClick}>Drama</button>
        <button className='genre-btn' name='family' id='10751' onClick={this.handleClick}>Family</button>
        <button className='genre-btn' name='fantasy' id='14' onClick={this.handleClick}>Fantasy</button>
        <button className='genre-btn' name='history' id='36' onClick={this.handleClick}>History</button>
        <button className='genre-btn' name='horror' id='27' onClick={this.handleClick}>Horror</button>
        <button className='genre-btn' name='music' id='10402' onClick={this.handleClick}>Music</button>
        <button className='genre-btn' name='mystery' id='9648' onClick={this.handleClick}>Mystery</button>
        <button className='genre-btn' name='romance' id='10749' onClick={this.handleClick}>Romance</button>
        <button className='genre-btn' name='science_fiction' id='878' onClick={this.handleClick}>Sci-Fi</button>
        <button className='genre-btn' name='thriller' id='53' onClick={this.handleClick}>Thriller</button>
        <button className='genre-btn' name='war' id='10752' onClick={this.handleClick}>War</button>
        <button className='genre-btn' name='western' id='37' onClick={this.handleClick}>Western</button>
        <button className='genre-btn' name='confirm' id='confirm' onClick={this.clearGenres}>Clear!</button>
      </div>
    )
  }
}

export default Genres
