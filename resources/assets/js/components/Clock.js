import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            semicolon: true,
        };
    }

    componentDidMount() {
        this.tick();

        this.interval = setInterval(
            () => this.tick(),
            1000,
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState(prevState => ({
            date: new Date(),
            semicolon: !prevState.semicolon,
        }));
    }

    formattedTimeString() {
        return Clock.doubleDigit(this.state.date.getHours())
            + (this.state.semicolon ? ':' : ' ')
            + Clock.doubleDigit(this.state.date.getMinutes());
    }

    static doubleDigit(input) {
        return input < 10 ? '0' + input : input;
    }

    render() {
        return (
            <div className="clock" onClick={this.props.onClickHandler}>
                {this.formattedTimeString()}
            </div>
        );
    }
}

Clock.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
};
