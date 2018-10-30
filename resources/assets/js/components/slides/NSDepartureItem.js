import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NSDepartureItem extends Component {
    constructor(props) {
        super(props);
    }

    localeTimeString(date) {
        return date.toLocaleTimeString(window.lang, {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    render() {
        return (
            <tr className="ns-departure-row">
                <td className="ns-departure-time">
                    {this.localeTimeString(new Date(this.props.time))}
                </td>
                <td className="ns-departure-destination">
                    {this.props.destination}
                    <div className="ns-departure-route">
                        {this.props.route}
                    </div>
                </td>
                <td className="ns-departure-type">
                    {this.props.type}
                </td>
            </tr>
        );
    }
}

NSDepartureItem.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    time: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    type: PropTypes.string,
    route: PropTypes.string,
};
