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
		return (
			<div>
				<button className="genre-btn" name="action" onClick={this.onGenreClickHandler}>Action</button>
				<button className="genre-btn" name="adventure" onClick={this.onGenreClickHandler}>Adventure</button>
				<button className="genre-btn" name="comedy" onClick={this.onGenreClickHandler}>Comedy</button>
				<button className="genre-btn" name="drama" onClick={this.onGenreClickHandler}>Drama</button>
				<button className="genre-btn" name="horror" onClick={this.onGenreClickHandler}>Horror</button>
				<button className="genre-btn" name="science_fiction" onClick={this.onGenreClickHandler}>Sci-Fi</button>
		  </div>)
	}
}

export default Genres