import React, { Component } from 'react';
import './Cars.css';
import Car from './Car';

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
			<div>	
				<div>
					<h1>{this.props.title}</h1>	
				</div>	
				
				{/* presents elements of array as <li></li> - podpatrzone, zapamiętać, bo z pamięci raczej bym nie zapisał :D */}
				
				{this.state.cartypes.map(function(car, index){
					return <Car className="Car" name={car.brand} type={car.type} key={index}></Car>
				})}
			</div>	
        );
    }
}

export default Cars;
