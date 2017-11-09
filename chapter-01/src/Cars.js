import React, { Component } from 'react';
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
  
  
    render() {
      return (
        <h1>{this.props.title}</h1>
      );
    }
}

export default Cars;
