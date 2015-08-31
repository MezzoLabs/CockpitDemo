<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return \View::make('pages/pages');

});

Route::get('/cockpit/pages', function () {
    return view('layouts.cockpit');
});

Route::get('/cockpit/models', function () {
    return view('layouts.cockpit');
});

Route::get('/cockpit/panels', function () {
    return view('layouts.cockpit');
});