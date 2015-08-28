import routes from './routes';
import jquery from './jquery';

export default config;

/*@ngInject*/ function config($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);

    routes.forEach(route => {
        $routeProvider.when(route.when, route);
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

    jquery();
}