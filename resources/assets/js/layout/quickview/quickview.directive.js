export default { name: 'mezzoQuickview', directive };

function directive(){
    return {
        restrict: 'E',
        templateUrl: 'layout/quickview/quickview.html',
        link
    };
}

/*@ngInject*/ function link(quickview){
    $('#quickview .btn-close').click(function(){
        quickview.setVisible(false);
    });
}