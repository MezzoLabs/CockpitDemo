<!DOCTYPE html>
<html>
    <head>
        <title>App Name - @yield('title')</title>

        <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,400italic' rel='stylesheet' type='text/css'>
        <link href="/css/app.css" rel='stylesheet' type="text/css" >

    </head>
    <body>
        <div id="page-container">
            @include('layouts.cockpit.sidebar')
            <div id="view-main">
                @include('layouts.cockpit.topbar')
                @include('layouts.cockpit.content')
            </div>
        </div>
    </body>
</html>