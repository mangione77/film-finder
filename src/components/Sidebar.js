// import { Grid, Row, Col } from 'react-bootstrap'
import React from 'react'
import Genres from './Genres'
import People from './People'
import { Sliderbar } from './Sliderbar'
import Age from './Age'
import { ResetButton } from './ResetButton'
import photoUrl from './Logo.svg'
import './css/Sidebar.css'
import Moviebutton from './Moviebutton'

export const Sidebar = (props) => {
  return (
    <div className='fix-sidebar'>
      <div className='logo-container'>
        <img id='logo' src={photoUrl} alt='Logo' />
      </div>
      <div className='section'>
        <h4 className="slidebar-title">Ages</h4>
        <Age
          ageValue={props.ageValue}
          onAgeClick={props.onAgeClick}
        />
      </div>
      <div>
        <h4 className="slidebar-title">Actor / Director</h4>
        <People
          onSubmit={props.onSubmit}
          people={props.people}
          onDelete={props.onDelete}
        />
      </div>
      <div>
        <h4 className="slidebar-title">Release year</h4>
        <Sliderbar
          data={props.data}
          currentValue={props.currentValue}
          defaultValue={props.defaultValue}
        />
      </div>
      <div>
        <h4 className="slidebar-title">Genres</h4>
        <Genres
          genreAdd={props.genreAdd}
          genreDelete={props.genreDelete}
          genreValue={props.genreValue}
          genreClear={props.genreClear}
        />
      </div>
      <ResetButton
        resetData={props.resetData}
      />
    </div>)
}
