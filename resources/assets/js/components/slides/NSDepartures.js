import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NSDepartureItem from './NSDepartureItem';

export default class NSDepartures extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide ns ns-departures">
                <h1>Train Departures</h1>
                <table className="ns-departures-table">
                    <tbody>
                    {this.props.departures.map(departure => {
                        return <NSDepartureItem
                            key={departure.id}
                            id={departure.id}
                            time={departure.time}
                            destination={departure.destination}
                            type={departure.type}
                            route={departure.route}
                        />;
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

NSDepartures.propTypes = {
    departures: PropTypes
        .arrayOf(PropTypes.shape(NSDepartureItem.propTypes))
        .isRequired,
};
