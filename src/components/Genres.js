import React, { Component } from 'react'


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
		if (this.state.genres.includes(event.target.id) === false) {
		this.setState({
			genres:this.state.genres.concat(event.target.id) // sets component state to the id of the genre button clicked
		})
		this.props.onGenreClick(this.state.genres) // concats the genres to the app main state
		}

	}

	componentDidUpdate() {
		console.log(this.state.genres)
	}
	render() {
		return (
			<div>
				<button className="genre-btn" name="action" id='28' onClick={this.onGenreClickHandler}>Action</button>
				<button className="genre-btn" name="adventure" id='12' onClick={this.onGenreClickHandler}>Adventure</button>
				<button className="genre-btn" name="animation" id='16' onClick={this.onGenreClickHandler}>Animation</button>
				<button className="genre-btn" name="comedy" id='35' onClick={this.onGenreClickHandler}>Comedy</button>
				<button className="genre-btn" name="crime" id='80' onClick={this.onGenreClickHandler}>Crime</button>
				<button className="genre-btn" name="documentary" id='99' onClick={this.onGenreClickHandler}>Documentary</button>
				<button className="genre-btn" name="drama" id='18' onClick={this.onGenreClickHandler}>Drama</button>
				<button className="genre-btn" name="family" id='10751' onClick={this.onGenreClickHandler}>Family</button>
				<button className="genre-btn" name="fantasy" id='14' onClick={this.onGenreClickHandler}>Fantasy</button>
				<button className="genre-btn" name="history" id='36' onClick={this.onGenreClickHandler}>History</button>
				<button className="genre-btn" name="horror" id='27' onClick={this.onGenreClickHandler}>Horror</button>
				<button className="genre-btn" name="music" id='10402' onClick={this.onGenreClickHandler}>Music</button>
				<button className="genre-btn" name="mystery" id='9648' onClick={this.onGenreClickHandler}>Mystery</button>
				<button className="genre-btn" name="romance" id='10749' onClick={this.onGenreClickHandler}>Romance</button>
				<button className="genre-btn" name="science_fiction" id='878' onClick={this.onGenreClickHandler}>Sci-Fi</button>
				<button className="genre-btn" name="thriller" id='53' onClick={this.onGenreClickHandler}>Thriller</button>
				<button className="genre-btn" name="war" id='10752' onClick={this.onGenreClickHandler}>War</button>
				<button className="genre-btn" name="western" id='37' onClick={this.onGenreClickHandler}>Western</button>
				<button className="genre-btn" name="confirm" id='' onClick={this.onGenreSubmit}>Clear!</button>
			</div>
		)
	}
}

export default Genres