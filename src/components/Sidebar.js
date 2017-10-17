import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Genres from './Genres'
import People from './People'
import { Sliderbar } from './Sliderbar'
import Age from './Age'
import { ResetButton } from './ResetButton'

export const Sidebar = (props) => {
	return (<div>
			<h1>FilmFinder</h1>
			<Genres 
			onGenreClick={props.onGenreClick}
			/>
			<Age 
			age={props.age}
			onAgeClick={props.onAgeClick}
			/>
			<People
	          onSubmit={props.onSubmit}
	          people={props.people}
	          onDelete={props.onDelete}
	        />
			<Sliderbar 
			data={props.data}
			currentValue={props.currentValue}
			defaultValue={props.defaultValue}

			/>	
			<ResetButton 
			resetData={props.resetData}
			/>

			</div>)
}
