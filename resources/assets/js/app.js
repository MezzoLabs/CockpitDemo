var app = angular.module('mezzo-model-builder', [ 'ngRoute', 'templates', 'angular-sortable-view' ]);

app.config(require('./config/config'));
require('./config/register')(app);