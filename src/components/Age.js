import React, { Component } from 'react'

class Age extends Component {
 	
	clickHandler = (event) => {
		event.preventDefault()
		this.props.onAgeClick(event.target.value)

	}


	render() {
			return (
				<div className="btn-group">
					<button className="btn btn-primary" value="0" onClick={this.clickHandler}>0</button>
					<button className="btn btn-primary" value="12" onClick={this.clickHandler}>12</button>		
					<button className="btn btn-primary" value="18" onClick={this.clickHandler}>18</button>								
					<button className="btn btn-primary" value="21" onClick={this.clickHandler}>21</button>
				</div>
			)
	}
}


export default Age