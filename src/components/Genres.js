import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'


class Genres extends Component {
	constructor(props) {
		super(props)

		this.state = {
			genres: []
		}

		this.onGenreClickHandler = this.onGenreClickHandler.bind(this)
		this.onGenreSubmit = this.onGenreSubmit.bind(this)
	}
	
	onGenreClickHandler = (event) => { 
		event.preventDefault()	
		if (this.state.genres.includes(event.target.id) === false) {
		this.setState({
			genres:this.state.genres.concat(event.target.id) // sets component state to the id of the genre button clicked
		})
		this.props.onGenreClick(this.state.genres) // concats the genres to the app main state
		}
	
	}

	onGenreSubmit = (event) => {
		event.preventDefault()
		this.setState({
			genres:[] // empties already selected genres
		})
		this.props.onGenreClick(this.state.genres) // empties main component genres state
	}


	render() {
		return (<ButtonGroup>
				<Button name="action" id='28' onClick={this.onGenreClickHandler}>Action</Button>
				<Button name="adventure" id='12' onClick={this.onGenreClickHandler}>Adventure</Button>
				<Button name="animation" id='16' onClick={this.onGenreClickHandler}>Animation</Button>
				<Button name="comedy" id='35' onClick={this.onGenreClickHandler}>Comedy</Button>
				<Button name="crime" id='80' onClick={this.onGenreClickHandler}>Crime</Button>
				<Button name="documentary" id='99' onClick={this.onGenreClickHandler}>Documentary</Button>
				<Button name="drama" id='18' onClick={this.onGenreClickHandler}>Drama</Button>
				<Button name="family" id='10751' onClick={this.onGenreClickHandler}>Family</Button>
				<Button name="fantasy" id='14' onClick={this.onGenreClickHandler}>Fantasy</Button>
				<Button name="history" id='36' onClick={this.onGenreClickHandler}>History</Button>
				<Button name="horror" id='27' onClick={this.onGenreClickHandler}>Horror</Button>
				<Button name="music" id='10402' onClick={this.onGenreClickHandler}>Music</Button>
				<Button name="mystery" id='9648' onClick={this.onGenreClickHandler}>Mystery</Button>
				<Button name="romance" id='10749' onClick={this.onGenreClickHandler}>Romance</Button>
				<Button name="science_fiction" id='878' onClick={this.onGenreClickHandler}>Sci-Fi</Button>
				<Button name="thriller" id='53' onClick={this.onGenreClickHandler}>Thriller</Button>
				<Button name="war" id='10752' onClick={this.onGenreClickHandler}>War</Button>
				<Button name="western" id='37' onClick={this.onGenreClickHandler}>Western</Button>
				<Button name="confirm" id='' onClick={this.onGenreSubmit}>Clear!</Button>
				</ButtonGroup>)
	}
}

export default Genres