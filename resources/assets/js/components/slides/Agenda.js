import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AgendaItem from './AgendaItem';

export default class Agenda extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide agenda">
                <h1>Activities</h1>
                <ul>
                    {this.props.activities.map(activity => {
                        return (
                            <AgendaItem
                                key={activity.id}
                                id={activity.id}
                                name={activity.name}
                                beginTime={activity.beginTime}
                                endTime={activity.endTime}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

Agenda.propTypes = {
    activities: PropTypes
        .arrayOf(PropTypes.shape(AgendaItem.propTypes))
        .isRequired,
};
