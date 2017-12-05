import React, { Component } from 'react';
import './ProfileAvatar.css';

class ProfileAvatar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            booksOnLoan: [
                {
                    id: "1",
                    title: "Hobbit",
                    author: "J. R. R. Tolkien"
                },
                {
                    id: "2",
                    title: "Learning Python",
                    author: "Unknown"
                },
                {
                    id: "3",
                    title: "Kamasutra",
                    author: "Unknown"
                },
                {
                    id: "4",
                    title: "Dzieci z Bullerbyn",
                    author: "Astrid Lindgren"
                },
                {
                    id: "5",
                    title: "Kapitał",
                    author: "Karol Marks"
                },
            ]
        }
    }



    render() {
        var booksOnLoan = this.state.booksOnLoan.length;

        return (
            <div>
                <h1>Profile1</h1>
                <img src={require('./img/avatar1.png')} />
                <p>Liczba wypożyczonych książek: {booksOnLoan}</p>
            </div>
        );
      }
    }

export default ProfileAvatar;
