import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <div>
                <input type="text"
                       onChange={this.props.handleUserInput} />
                <h1>{this.props.formattedNumber}</h1>
            </div>
        );
    }
}

export default Form;