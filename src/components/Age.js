import React, { Component } from 'react'

class Age extends Component {
 	
	clickHandler = (event) => {
		event.preventDefault()
		this.props.onAgeClick(event.target.value)

	}

	render() {
			return (
				<div className="btn-group">
					<button className="btn btn-primary" value="nr" onClick={this.clickHandler}>All Ages</button>
					<button className="btn btn-primary" value="pg" onClick={this.clickHandler}>PG-10</button>		
					<button className="btn btn-primary" value="pg-13" onClick={this.clickHandler}>PG-13</button>								
					<button className="btn btn-primary" value="r" onClick={this.clickHandler}>+18</button>
					<button className="btn btn-primary" value="nc-17" onClick={this.clickHandler}>Extreme</button>	
				</div>
			)
	}
}


export default Age