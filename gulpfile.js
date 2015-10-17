var elixir = require('laravel-elixir');
var blueprint = require('gulp-blueprint');

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

elixir(function(mix) {
    blueprint(function modify(draft){
        draft.elixir = mix;
    });

    mix.browserSync();
});
