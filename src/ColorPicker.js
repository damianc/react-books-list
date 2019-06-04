import React from 'react';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.pickerRef = React.createRef();
    }

    render() {
        return <input type="color" ref={this.pickerRef} onChange={() => this.props.colorChanged(this.pickerRef.current.value)} />;
    }
}

export default ColorPicker;
