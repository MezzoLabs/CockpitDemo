<!DOCTYPE html>
<html>
    <head>
        <title>App Name - @yield('title')</title>

        <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,400italic' rel='stylesheet' type='text/css'>
       <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
        <link href="/css/app.css" rel='stylesheet' type="text/css" >

        <script src="/bower/jquery/dist/jquery.min.js" type="text/javascript"></script>
        <script src="/js/bundle.js" type="text/javascript"></script>
        <script src="/js/demo.js" type="text/javascript"></script>

    </head>
    <body class="sidebar-pinned">
        <div id="page-container">
            @include('layouts.cockpit.sidebar')
            <div id="view-main">
                @include('layouts.cockpit.topbar')
                @include('layouts.cockpit.content')
            </div>
        </div>
    </body>
</html>