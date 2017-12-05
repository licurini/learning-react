import React, { Component } from 'react';
import BookItem from "./BookItem.js";

class Books extends Component {
    constructor(props){
        super();
        this.state = {
            booksAvailable: [
                {
                    id: "6",
                    title: "Kłamca",
                    author: "Jakub Ćwiek"
                },
                {
                    id: "7",
                    title: "Kod Da Vinci",
                    author: "Dan Brown"
                },
                {
                    id: "8",
                    title: "Dziady",
                    author: "Adam Mickiewicz"
                },
                {
                    id: "9",
                    title: "Mistrz i Małgorzata",
                    author: "Michaił Bułhakow"
                },
                {
                    id: "10",
                    title: "Proces",
                    author: "Franz Kafka"
                }
            ]
        }
    }

    render() {
        var booksAvailable = this.state.booksAvailable.map(
            function(book, index){
                return (
                    <BookItem
                        {...book}
                        bookButton="Wypożycz"
                        key={index}>
                    </BookItem>
                );
            }
        );

        return (
            <div>
                <h1>Dostępne książki</h1>
                <div>
                    {booksAvailable}
                </div>
            </div>
        );
    }
}

export default Books;
