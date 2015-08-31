export default { name: 'mezzoQuickviewTrigger', directive };

/*@ngInject*/ function directive(quickview){
    return {
        restrict: 'A',
        link
    };

    function link(scope, attributes, element){
        $(element).click(() => {
            quickview.setVisible(!quickview.isVisible());
            return false;
        });
    }
}