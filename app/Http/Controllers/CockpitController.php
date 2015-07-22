<?php


namespace App\Http\Controllers;


class CockpitController extends Controller{

    public function getPages(){
        return \View::make('pages/pages');
    }

} 