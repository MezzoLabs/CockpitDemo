import routes from './routes';
import jquery from './jquery';

export default config;

/*@ngInject*/ function config($locationProvider){
    $locationProvider.html5Mode(true);
    jquery();
}