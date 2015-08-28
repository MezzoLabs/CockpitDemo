import routes from './routes';

export default config;

/*@ngInject*/ function config($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);

    routes.forEach(route => {
        $routeProvider.when(route.when, route);
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
}