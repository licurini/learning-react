import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cars from './Cars.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Cars title="Cars" />
  </MuiThemeProvider>
);


ReactDOM.render(

    <App/>, 
    document.getElementById('root')
    

);

