import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AgendaItem extends Component {
    constructor(props) {
        super(props);
    }

    static localeDateString(date) {
        return date.toLocaleDateString(window.lang, {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        });
    }

    static localeTimeString(date) {
        return date.toLocaleTimeString(window.lang, {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    formattedAgendaDateTime() {
        let begin = this.props.beginTime
            ? new Date(this.props.beginTime)
            : undefined;
        let end = this.props.endTime
            ? new Date(this.props.endTime)
            : undefined;

        let string = AgendaItem.localeDateString(begin);

        if (end instanceof Date && begin.toDateString() < end.toDateString()) {
            string += ' - ' + AgendaItem.localeDateString(end);
        } else if (begin.getHours() > 0) {
            string += ', ' + AgendaItem.localeTimeString(begin);
        }

        return string;
    }

    render() {
        return (
            <li>
                <h2>{this.props.name}</h2>
                <span>{this.formattedAgendaDateTime()}</span>
            </li>
        );
    }
}

AgendaItem.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    beginTime: PropTypes.string,
    endTime: PropTypes.string,
};
