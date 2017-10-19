import React, { Component } from 'react'

class Genres extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    if (!this.props.genreValue.includes(event.target.id)) {
      this.props.genreAdd(event.target.id)
      event.target.className = 'selected genre-btn'
    } else {
      this.props.genreDelete(event.target.id)
      event.target.className = 'genre-btn'
    }
  }
  componentWillReceiveProps (nextProps) {
    if (!nextProps.genreValue.length) {
      let selected = document.getElementsByClassName('selected')
      if (selected.length) {
        let selectedElement = selected
        while (selectedElement.length) {
          selectedElement[0].className = 'genre-btn'
          selectedElement = document.getElementsByClassName('selected')
        }
      }
    }
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
      </div>
    )
  }
}

export default Genres
