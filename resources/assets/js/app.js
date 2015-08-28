var app = angular.module('Mezzo', [ 'ngRoute', 'templates', 'angular-sortable-view' ]);

app.config(require('./config/config'));
require('./config/register')(app);