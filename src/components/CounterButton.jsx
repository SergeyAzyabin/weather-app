import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const Counter = (props) => {
    return <h1>{`Counter value is:${props.counter}`}</h1>
}
    
Counter.propTypes = {

}
    


class CounterButton extends React.Component {
    state = {
        counter:0
    }
    handleClick = () => {
        this.setState(prevState => ({
            counter: ++prevState.counter
        }))
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                
                <div>{counter}</div>
                <Counter counter={counter} />
                <button onClick={this.handleClick}>+1</button>
                
            </div>
            
            );
    }
}
export default CounterButton;