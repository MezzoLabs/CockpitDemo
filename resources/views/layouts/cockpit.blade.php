<!DOCTYPE html>
<html ng-app="Mezzo">
    <head>
        <title>App Name - @yield('title')</title>
        <base href="/">

        <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,400italic' rel='stylesheet' type='text/css'>
        <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
        <link href="/bower/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet">
        <link href="/css/app.css" rel='stylesheet' type="text/css" >

        <script src="/bower/jquery/dist/jquery.min.js" type="text/javascript"></script>
        <script src="/bower/bootstrap-sass/assets/javascripts/bootstrap.js" type="text/javascript"></script>
        <script src="/bower/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js" type="text/javascript"></script>
        <script src="/bower/select2/dist/js/select2.js" type="text/javascript"></script>
        <script src="/bower/angular/angular.min.js"></script>
        <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script>
        <script src="/bower/angular-sortable-view/src/angular-sortable-view.min.js"></script>
        <script src="/js/templates.js"></script>
        <script src="/js/bundle.js" type="text/javascript"></script>
    </head>
    <body class="sidebar-pinned">
        <div id="page-container">
            @include('layouts.cockpit.sidebar')
            <div id="view-main">
                @include('layouts.cockpit.topbar')
                @include('layouts.cockpit.content')
                @include('layouts.cockpit.quickview')
            </div>
        </div>
    </body>
</html>