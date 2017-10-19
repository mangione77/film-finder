import React, { Component } from 'react'

class Age extends Component {
 	
	clickHandler = (event) => {
		event.preventDefault()
		this.props.onAgeClick(event.target.value)

	}

	render() {
			return (
				<div>
					<button className="age-btn allMovies" value="" onClick={this.clickHandler}>All Movies</button>
					<button className="age-btn ratedpg" value="PG" onClick={this.clickHandler}>PG-10</button>		
					<button className="age-btn ratedpg13" value="PG-13" onClick={this.clickHandler}>PG-13</button>								
					<button className="age-btn ratedr" value="R" onClick={this.clickHandler}>+18</button>
					<button className="age-btn ratedextreme" value="NC-17" onClick={this.clickHandler}>Extreme</button>	
				</div>
			)
	}
}


export default Age