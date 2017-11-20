import React, { Component } from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';



class Car extends Component {
	componentDidMount () {
		console.log(this.props);
	}
	
	render () {
		return (
			<div>
			    <Card
				    style={{
							width: '70%',
							margin: 'auto',
						}}
				>
			        <CardHeader
					    title={this.props.brand}
						subtitle={this.props.type}
					/>	
					<CardActions>
					    <RaisedButton label="Buy" />
					</CardActions>
				</Card>
			</div>
		);
	}
}		
						
				

export default Car;