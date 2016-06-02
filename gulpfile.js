/* @preserve
 *
 * Author:  Jaume Sala
 * Website: jaumesala.net
 *
 */

var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/*
 |--------------------------------------------------------------------------
 | Global variables
 |--------------------------------------------------------------------------
 */

var publicPath      = ".";
var vendorPath      = 'vendor/';
var bowerPath       = vendorPath + 'bower_components/';
var bowerRelative   = '../../../' + bowerPath;
var min             = elixir.config.production ? '.min' : '';


elixir.config.publicPath                        = publicPath;
elixir.config.cssOutput                         = publicPath + '/css';
elixir.config.jsOutput                          = publicPath + '/js';
elixir.config.css.autoprefix.options.browsers   = ['last 2 versions', 'ie 8', 'ie 9'];

/*
 |--------------------------------------------------------------------------
 | Bower components array (plugins.js)
 |--------------------------------------------------------------------------
 */

var bowerComponents = [

    bowerRelative + 'bootstrap/dist/js/bootstrap.js',
    bowerRelative + 'imagesloaded/imagesloaded.pkgd.js',
];


/*
 |--------------------------------------------------------------------------
 | Copy array
 |--------------------------------------------------------------------------
 */
var copyToPublic = [

    // JQuery
    [   bowerPath + 'jquery/dist/jquery.min.js',
        publicPath + '/' + elixir.config.js.outputFolder +'/vendor/jquery.min.js'],

    // Modernizr
    [   elixir.config.assetsPath + '/vendor/modernizr/modernizr-2.8.3.min.js',
        publicPath + '/' + elixir.config.js.outputFolder + '/vendor/modernizr-2.8.3.min.js'],

    // Bootstrap fonts
    [   bowerPath + 'bootstrap/fonts',
        elixir.config.publicPath + '/fonts'],

    // Project fonts
    [   elixir.config.assetsPath + '/fonts',
        elixir.config.publicPath + '/fonts']

];

/*
 |--------------------------------------------------------------------------
 | Main default task
 |--------------------------------------------------------------------------
 */
elixir(function(mix) {
    mix

        // main.less
        .less('main.less', publicPath + '/' + elixir.config.css.outputFolder + '/main' + min + '.css')

        // main.js
        .scriptsIn(
            elixir.config.assetsPath + '/js',
            publicPath + '/' + elixir.config.js.outputFolder + '/main' + min + '.js'
        )

        //plugins.js
        .scripts(
            bowerComponents,
            publicPath + '/' + elixir.config.js.outputFolder + '/plugins' + min + '.js',
            elixir.config.assetsPath + '/js'
        );

        // copy files
        for (var i = 0, len = copyToPublic.length; i < len; i++) {
            mix.copy(
                copyToPublic[i][0],
                copyToPublic[i][1]
            );
        }

});