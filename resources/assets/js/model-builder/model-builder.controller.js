exports.name = 'ModelBuilderController';
exports.controller = /*@ngInject*/ function ModelBuilderController($scope, componentService, uid){

    $scope.tab = 'add';
    $scope.fields = [];
    $scope.selectedField = null;

    $scope.showTab = showTab;
    $scope.addField = addField;
    $scope.selectField = selectField;
    $scope.deleteField = deleteField;

    function showTab(tab, $event){
        if($event){
            $event.preventDefault();
        }

        if(tab === 'edit' && !$scope.selectedField) return;

        $scope.tab = tab;

        $('tab-heading-' + tab).tab('show');

        if(tab === 'add'){
            $scope.selectedField = null;
        }
    }

    function addField(name){
        var field = {
            id: uid(),
            name: name,
            options: {},
            mainDirective: 'mezzo-' + name,
            optionsDirective: 'mezzo-' + name + '-options'
        };

        componentService.setOptions(field.options);
        $scope.fields.push(field);
    }

    function selectField(field){
        $scope.selectedField = field;

        componentService.setOptions(field.options);
        showTab('edit');
    }

    function unselect(){
        $scope.selectedField = null;

        showTab('add');
    }

    function deleteField(field){
        unselect();
        _.remove($scope.fields, field);
    }

};