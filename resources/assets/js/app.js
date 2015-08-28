var app = angular.module('Mezzo', [ 'ui.router', 'templates', 'angular-sortable-view' ]);

app.config(require('./config/config'));
require('./register')(app);