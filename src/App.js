import React, { Component } from 'react';

import BooksHeader from './BooksHeader'
import BooksList from './BooksList';
import SwitchViewButton from './SwitchViewButton';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {books: [], yearShown: true};
        this.handleClick = this.handleClick.bind(this);
        this.handleSorting = this.handleSorting.bind(this);
        this.handleFiltering = this.handleFiltering.bind(this);
    }

    handleClick() {
        this.setState({yearShown: !this.state.yearShown});
    }

    handleSorting(key) {
        this.sortBooksBy(key);
    }

    handleFiltering(e) {
        this.filterBooks(e.target.value);
    }

    loadBooks(fetch = false) {
        var bookList = [{
            title: 'Przewodnik po Madagaskarze',
            year: 2004
        }, {
            title: 'Encyklopedia kretów',
            year: 2011
        }];

        if (fetch) {
            return bookList;
        }
        this.setState({books: bookList});
    }

    sortBooksBy(key) {
        var bookList = Array.from(this.state.books);
        bookList.sort(function (bookA, bookB) {
            var A = bookA[key], B = bookB[key];
            return String.prototype.localeCompare.call(A, B);
        });
        this.setState({books: bookList});
    }

    filterBooks(phrase) {
        var bookList = Array.from(this.loadBooks(true));
        bookList = bookList.filter(book => book.title.indexOf(phrase) != -1);
        this.setState({books: bookList});
    }

    componentDidMount() {
        this.loadBooks();
    }

    componentDidUpdate(prevProps, prevState) {
        var prevList = prevState.books.length;
        var currList = this.state.books.length;
        var lengthDiff = prevList - currList;
        if (lengthDiff == 0) return;

        console.log(
            'Zmiana listy: %s%d',
            (lengthDiff <= 0 ? '+' : '-'),
            Math.abs(lengthDiff)
        );
    }

    render() {
        return (
            <React.Fragment>
                <BooksHeader color="blue">Books</BooksHeader>
                <BooksList books={this.state.books} years={this.state.yearShown} separator="&bull;" />
                <SwitchViewButton onClick={this.handleClick}>{this.state.yearShown ? 'Ukryj' : 'Pokaż'} lata</SwitchViewButton>
                <button onClick={this.handleSorting.bind(this, 'year')}>Sortuj wg roku</button>
                <button onClick={this.handleSorting.bind(this, 'title')}>Sortuj wg tytułu</button>
                <input onInput={this.handleFiltering} />
            </React.Fragment>
        );
    }
}

export default App;
