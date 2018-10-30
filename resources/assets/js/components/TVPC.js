import axios from 'axios';
import React, {Component, Fragment} from 'react';
import Clock from './Clock';
import Slide from './Slide';

export default class TVPC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: [],
            currentSlide: 0,
            defaultTimeout: 30,
        };
    }

    componentDidMount() {
        this.updateSettings();

        this.interval = setInterval(
            () => this.tick(),
            this.state.defaultTimeout * 1000,
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateSettings() {
        axios.get('api/settings')
            .then(response => {
                if ('theme' in response.data) {
                    setTheme(response.data.theme);
                }
                this.setState(() => ({
                    slides: response.data.slides,
                    currentSlide: 0,
                }));
            });
    }

    tick() {
        if (this.state.currentSlide + 1 >= this.state.slides.length) {
            this.updateSettings();
        } else {
            this.setState(prevState => ({
                currentSlide: prevState.currentSlide + 1,
            }));
        }
    }

    render() {
        let slide = this.state.slides[this.state.currentSlide] || {
            type: 'logo',
        };

        return (
            <Fragment>
                <Clock onClickHandler={this.tick.bind(this)}/>
                <Slide slide={slide}/>
            </Fragment>
        );
    }
}
