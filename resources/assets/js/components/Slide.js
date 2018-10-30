import axios from 'axios';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Agenda from './slides/Agenda';
import Logo from './slides/Logo';
import NSDepartures from './slides/NSDepartures';
import Photo from './slides/Photo';
import Poster from './slides/Poster';

/**
 * @todo Use sessionStorage as cache for certain types of slides.
 */
export default class Slide extends Component {
    constructor(props) {
        super(props);

        this.state = Slide.getStateFromPropsAndData(props);
    }

    componentWillReceiveProps(nextProps) {
        let dataUrl = Slide.getDataUrl(nextProps.slide.type);
        if (typeof dataUrl === 'string') {
            axios.get(dataUrl, {timeout: 1000})
                .then(response => {
                    this.setState(Slide.getStateFromPropsAndData(
                        nextProps,
                        response.data,
                    ));
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            this.setState(Slide.getStateFromPropsAndData(nextProps));
        }
    }

    static getDataUrl(type) {
        type = type.toLowerCase();

        switch (type) {
            case 'agenda':
            case 'ns-departures':
            case 'photo':
            case 'poster':
                return 'api/slide/' + type;

            default:
            case 'logo':
                return undefined;
        }
    }

    static getStateFromPropsAndData(props, data) {
        return {
            type: props.slide.type,
            data: data,
        };
    }

    render() {
        switch (this.state.type) {
            case 'agenda':
                return <Agenda activities={this.state.data}/>;
            case 'logo':
                return <Logo/>;
            case 'ns-departures':
                return <NSDepartures departures={this.state.data}/>;
            case 'photo':
                return <Photo/>;
            case 'poster':
                return <Poster/>;
            default:
                return 'Unknown';
        }
    }
}

Slide.propTypes = {
    slide: PropTypes.shape({
        type: PropTypes.string.isRequired,
    }).isRequired,
};
