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
    console.log('nextprops', nextProps)
    if (!nextProps.ageValue) {
      let selected = document.getElementsByClassName('sel')
      if (selected.length) {
        this.deselectEverything()
        document.getElementById('allMovies').className = 'age-btn allMovies allMoviesSelected sel'
      }
    }
  }

  render () {
    return (
      <div className='age'>
        <button id='allMovies' className='age-btn allMovies allMoviesSelected sel' value='' onClick={this.handleClick}>All Movies</button>
        <button id='ratedpg' className='age-btn ratedpg' value='PG' onClick={this.handleClick}>PG-10</button>
        <button id='ratedpg13' className='age-btn ratedpg13' value='PG-13' onClick={this.handleClick}>PG-13</button>
        <button id='ratedr' className='age-btn ratedr' value='R' onClick={this.handleClick}>+18</button>
        <button id='ratedextreme' className='age-btn ratedextreme' value='NC-17' onClick={this.handleClick}>Extreme</button>
      </div>
    )
  }
}

export default Age
