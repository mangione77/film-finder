import React, { Component } from 'react'

class Age extends Component {
	render() {
		return (<div className="btn-group btn-group-justified">
				<button className="btn btn-primary">0</button>
				{' '}	
				<button className="btn btn-primary">12</button>
				{' '}		
				<button className="btn btn-primary">18</button>		
				{' '}					
				<button className="btn btn-primary">21</button>
				</div>)
	}
}

export default Age