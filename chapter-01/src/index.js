import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cars from './Cars.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Cars />, document.getElementById('root'));
registerServiceWorker();
