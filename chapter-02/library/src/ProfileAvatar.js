import React, { Component } from 'react';


class ProfileAvatar extends Component {
  render() {
    return (
        <div>
            <h1>Profile1</h1>
            <img src={require('./img/avatar1.png')} />
        </div>
    );
  }
}

export default ProfileAvatar;
