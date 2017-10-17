import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'


class Genres extends Component {
	constructor(props) {
		super(props)

		this.state = {
			genres: []
		}

		this.onGenreClickHandler = this.onGenreClickHandler.bind(this)
	}
	
	onGenreClickHandler = (event) => { 
		event.preventDefault()	
		if (this.state.genres.includes(event.target.name) === false) {
		this.setState({
			genres:this.state.genres.concat(event.target.name) // sets component state to the name of the genre button clicked
		})
		this.props.onGenreClick(this.state.genres) // concats the genres to the app main state
		}

	}

	componentDidUpdate() {
		console.log(this.state.genres)
	}


	render() {
		return (<ButtonGroup>
				<Button name="action" onClick={this.onGenreClickHandler}>Action</Button>
				<Button name="adventure" onClick={this.onGenreClickHandler}>Adventure</Button>
				<Button name="comedy" onClick={this.onGenreClickHandler}>Comedy</Button>
				<Button name="drama" onClick={this.onGenreClickHandler}>Drama</Button>
				<Button name="horror" onClick={this.onGenreClickHandler}>Horror</Button>
				<Button name="science_fiction" onClick={this.onGenreClickHandler}>Sci-Fi</Button>
				</ButtonGroup>)
	}
}

export default Genres