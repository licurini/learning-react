import React, { Component } from 'react';
import './Cars.css';

class Car extends Component {
	componentDidMount () {
		console.log(this.props);
	}
	
	render () {
		return (
			<div className="Page">
			    <p>{this.props.brand} - {this.props.type}</p>
			</div>
		);
	}
}

export default Car;