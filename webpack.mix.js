let mix = require('laravel-mix');

let themes = [
    'gewis',
    'bac',
    'gepwnage',
];

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js');

themes.map(theme => {
    mix.sass('resources/assets/sass/' + theme + '.scss', 'public/css');
});

mix.copyDirectory('resources/assets/images', 'public/images');

if (mix.inProduction()) {
    mix.version();
}
