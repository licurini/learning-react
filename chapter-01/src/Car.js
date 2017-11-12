import React, { Component } from 'react';
import './Cars.css';

class Car extends Component {
	render () {
		return (
			<div className="Page">
			    <p>{this.props.name} - {this.props.type}</p>
			</div>
		);
	}
}

export default Car;