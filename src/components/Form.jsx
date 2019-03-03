import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';


class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="City"/>
                <button>Get weather</button>
            </form>
            
        )
    }
}

export default Form;