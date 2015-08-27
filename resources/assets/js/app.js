var app = angular.module('mezzo-model-builder', [ 'ngRoute', 'templates', 'angular-sortable-view' ]);

app.config(require('./config'));
require('./register')(app);