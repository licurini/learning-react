import React, { Component } from 'react';
import ProfileAvatar from "./ProfileAvatar";
import BookItem from "./BookItem.js";

class Profile extends Component {
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
            ],

            booksRead: 0
        }
    }

    render() {
        var booksOnLoanNumber = this.state.booksOnLoan.length;
        var booksOnLoanList = this.state.booksOnLoan.map(
            function(book, index){
                return (
                    <BookItem
                        {...book}
                        bookButton="Zwróć"
                        key={index}>
                    </BookItem>
                );
            }
        );

        return (
            <div>
                <ProfileAvatar />
                <p>Liczba wypożyczonych książek: {booksOnLoanNumber}</p>
                <p>Liczba przeczytanych książek: {this.state.booksRead}</p> <br />
                <div>
                    <p><strong>Wypożyczone książki:</strong></p>
                    {booksOnLoanList}
                </div>
            </div>
        );
    }
}

export default Profile;
