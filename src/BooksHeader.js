import React from 'react';
import ColorPicker from './ColorPicker';

class BooksHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {color: props.color};
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{color: this.state.color, display: 'inline', marginRight: 20}}>{this.props.children}</h1>
                <ColorPicker colorChanged={this.handleColorChange} />
            </React.Fragment>
        );
    }

    handleColorChange(newColor) {
        this.setState({color: newColor});
    }
}

BooksHeader.defaultProps = {
    color: 'red'
};

export default BooksHeader;
