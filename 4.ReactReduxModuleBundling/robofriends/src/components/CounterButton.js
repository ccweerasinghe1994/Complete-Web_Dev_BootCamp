import React, {Component} from 'react';


class CounterButton extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.count !== nextState.count;
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState(state=>({
            count: state.count + 1
        }))
    }

    render() {

        return (
            <button color={this.props.color} onClick={this.handleClick}>Counter:{this.state.count}</button>
        )
    }

}

export default CounterButton;