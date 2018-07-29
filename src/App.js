import React from 'react';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';
import * as BooksAPI from './BooksAPI';
import {
    Route
}
from 'react-router-dom';


class BooksApp extends React.Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
        })
    }

    moveToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);

        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            })
        })
    }

    render() {
        return ( < div className = "app" > { /* Render the SearchBooks */ } < Route path = "/search"
            render = {
                () => ( < SearchBooks books = {
                        this.state.books
                    }
                    moveToShelf = {
                        this.moveToShelf
                    }

                    />
                )
            }
            />

            { /* Render the ListBooks */ } < Route exact path = "/"
            render = {
                () => ( < ListBooks books = {
                        this.state.books
                    }
                    moveToShelf = {
                        this.moveToShelf
                    }
                    />
                )
            }
            />

            < /div>
        )
    }
}



export default BooksApp