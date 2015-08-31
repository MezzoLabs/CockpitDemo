export default { name: 'mezzoContent', directive };

function directive(){
    return {
        restrict: 'E',
        templateUrl: 'layout/content/content.html'
    };
}