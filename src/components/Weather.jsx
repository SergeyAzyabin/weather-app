import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';


class Weather extends React.Component {
    render() {
        return (
            <div>
            { this.props.city && 
            
            <div>
                <p>Город: {this.props.city}</p>
                <p>Температура: {this.props.temp}</p>
                <p>Восход солнца: {this.props.sunrise}</p>
                <p>Заход солнца: {this.props.sunset}</p>
                
            </div>
            }
            <p>{this.props.error}</p>
            </div>
            
        )
    }
}

export default Weather;
