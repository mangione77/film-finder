import React, { Component } from 'react'

class Age extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.deselectEverything()
    this.props.onAgeClick(event.target.value)
    let uniqueClassName = event.target.className.replace('age-btn', '').trim()
    let newClassName = `age-btn ${uniqueClassName} ${uniqueClassName}Selected sel`
    console.log(newClassName)
    event.target.className = newClassName
    
    /*if (!this.props.genreValue.includes(event.target.id)) {
      this.props.genreAdd(event.target.id)
      event.target.className = 'selected genre-btn'
    } else {
      this.props.genreDelete(event.target.id)
      event.target.className = 'genre-btn'
    }*/
  }
  deselectEverything () {
    let selectedElement = document.getElementsByClassName('sel')
    while (selectedElement.length) {
      let splitClass = selectedElement[0].className.split(' ')
      selectedElement[0].className = splitClass[0] + ' ' + splitClass[1]
      // console.log(selectedElement[0].className)
      selectedElement = document.getElementsByClassName('sel')
    }
  }

  componentWillReceiveProps (nextProps) {
    /*if (!nextProps.genreValue.length) {
      let selected = document.getElementsByClassName('selected')
      if (selected.length) {
        this.deselectEverything()
      }
    }*/
  }

  render () {
    return (
      <div className='age'>
        <button name='allMovies' className='age-btn allMovies' value='' onClick={this.handleClick}>All Movies</button>
        <button name='ratedpg' className='age-btn ratedpg' value='PG' onClick={this.handleClick}>PG-10</button>
        <button name='ratedpg13' className='age-btn ratedpg13' value='PG-13' onClick={this.handleClick}>PG-13</button>
        <button name='ratedr' className='age-btn ratedr' value='R' onClick={this.handleClick}>+18</button>
        <button name='ratedextreme' className='age-btn ratedextreme' value='NC-17' onClick={this.handleClick}>Extreme</button>
      </div>
    )
  }
}

export default Age
