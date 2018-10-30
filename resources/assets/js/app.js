import './bootstrap';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import TVPC from './components/TVPC';

// Theme support
window.themes = {};

window.setTheme = theme => {
    if (theme in window.themes) {
        $('link#theme').attr('href', window.themes[theme]);
    }
};

axios.get('api/themes')
    .then(response => {
        window.themes = response.data;
    });

// TODO Recreate Laravel's route() method in JavaScript

// Instantiate app
let container = document.getElementById('app');
if (typeof container === 'object') {
    ReactDOM.render(<TVPC/>, container);
}
