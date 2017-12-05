import React, { Component } from 'react';
import './ProfileAvatar.css';

class ProfileAvatar extends Component {

    render() {

        return (
            <div>
                <h1>Profile1</h1>
                <img src={require('./img/avatar1.png')} alt="Avatar" />
            </div>
        );
      }
    }

export default ProfileAvatar;
