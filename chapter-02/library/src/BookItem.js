import React, { Component } from 'react';

class BookItem extends Component {
    constructor (props) {
        super();
        this.state = {
            id: "",
            title: "",
            author: ""
        }
    }

    componentWillMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            author: this.props.author
        })
    }

    render() {

        return (
            <div>
                <p>{this.state.author} - {this.state.title}</p>
                <button>Zwróć</button>
            </div>
        )
    }
}

export default BookItem;
