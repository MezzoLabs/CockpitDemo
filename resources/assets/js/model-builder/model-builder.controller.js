export default { name: 'ModelBuilderController', controller };

/*@ngInject*/ function controller($scope, modelBuilder){
    $scope.modelBuilder = modelBuilder;
}