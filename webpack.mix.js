let mix = require('laravel-mix');

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

mix.js('assets/js/app.js', 'public/js')
   .sass('assets/sass/app.scss', 'public/css')
   .setPublicPath('public')
   .browserSync({
       proxy: 'localhost:5000',
       files: [
            'public/*.html',
            'public/css/*.css',
            'public/js/*.js',

       ]
   });
