import React, { Component } from 'react';
import './Cars.css';

class Cars extends Component {
  constructor (props) {
	  super ();
	  
  }
  
  
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

export default Cars;
