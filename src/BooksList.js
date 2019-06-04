import React from 'react';

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.ulRef = React.createRef();
    }

    render() {
        var bookListItemNodes = this.props.books.map((book, idx) => {
            return (
                <li key={idx} id={'book-' + idx} onClick={() => console.log(this.ulRef.current.className)}>
                    {book.title}
                    {
                        this.props.years
                        ? (
                            <React.Fragment>
                                <span dangerouslySetInnerHTML={{__html: '&nbsp;' + this.props.separator}}></span>
                                <span style={{color: 'red'}}> {book.year}</span>
                            </React.Fragment>
                            )
                        : ''
                    }
                </li>
            );
        });

        return <ul className="books-list" ref={this.ulRef}>{bookListItemNodes}</ul>
    }
}

BooksList.defaultProps = {
    separator: '-'
};

export default BooksList;
