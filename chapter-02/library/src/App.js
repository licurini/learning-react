import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Profile from './Profile.js';
import Books from './Books.js';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <div>
                    <h1>Nawigacja</h1>
                    <Link to="/profile">Profil</Link> <br />
                    <Link to="/books">Książki</Link>
                </div>

                <Route path="/profile" component={Profile} />
                <Route path="/books" component={Books} />
            </div>
        </Router>
    );
  }
}

export default App;
