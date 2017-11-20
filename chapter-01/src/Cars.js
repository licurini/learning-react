import React, { Component } from 'react';
import Car from './Car';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import './Cars.css';


class Cars extends Component {
    constructor (props) {
	    super ();
	  
	//pomijam getInitialState, bo przy takiej formie inicjalizacji komponentu podobno ta metoda nie jest zalecana.
    
		this.state = {
		    cartypes: [{
			    brand: "Honda",
				type: "liftback"
		    },
			{
				brand: "Audi",
				type: "hatchback"
			},
			{
				brand: "Mercedes",
				type: "sedan"
			},
			{
				brand: "Land Rover",
				type: "4WD"
			},
			{
				brand: "Alfa Romeo",
				type: "alwaysbroken"
			},
			{
			    brand: "Porshe",
				type: "twoseater"
			},
			{
				brand: "Ferrari",
				type: "supersport"
			},
			{
				brand: "Jeep",
				type: "offroad"
			},
			{
				brand: "Koenigsegg",
				type: "premium"
			},
			{
				brand: "Jaguar",
				type: "limo"
			},
		    ]
	    }
		
		console.log("Component initialized. Initial state is set.")
    }
	
	componentWillMount () {
		console.log("Component Will Mount.")
	}
	
	componentDidMount () {
		console.log("Component Did Mount.")
	}
	
	
	render() {
        
		
		return (
			<div className="container">	
				<Paper zDepth={2}>
				    <div className="header">
					    <AppBar
							title={this.props.title}
						/>	
					</div>	
				    	
				
				    {/* generates instances of Car component */}
				
				    {this.state.cartypes.map(function(car, index){

					    return (
						
							<MuiThemeProvider>
								<Car {...car} key={index} />
							</MuiThemeProvider>
						);
						

				    })}
			    </Paper>
			</div>	
        );
    }
}

export default Cars;
