import Component from '../Component';

module.exports = new Component('mezzoRelation', 'relation/relation.html', modifyOptions);

function modifyOptions(options) {
    options.title = 'Title';
    options.leftMode = '1';
    options.rightMode = '1';
    options.leftModel = { id: 0, name: 'Tutorial' };
    options.models = [
        { id: 1, name: 'User' },
        { id: 2, name: 'Category' }
    ];
    options.rightModel = options.models[0];
    options.title = options.rightModel.name;
    options.columnPosition = 'left';
    options.pivotTable = getPivotTableName();

    options.getModelLabel = getModelLabel;
    options.sentence = sentence;
    options.updateTitle = updateTitle;
    options.showPivotTable = showPivotTable;
    options.showLeftColumn = showLeftColumn;
    options.showRightColumn = showRightColumn;

    function getModelLabel(model, mode) {
        switch (mode) {
            case '1':
                return model.name;
            case 'n':
                return pluralize(model.name);
            default:
                return model.name;
        }
    }

    function sentence() {
        var sentence = [];

        if (options.leftMode === '1') {
            sentence.push('One');
            sentence.push(options.leftModel.name);
            sentence.push('has');
        } else {
            sentence.push('Many');
            sentence.push(pluralize(options.leftModel.name));
            sentence.push('have');
        }

        if (options.rightMode === '1') {
            sentence.push('one');
            sentence.push(options.rightModel.name);
        } else {
            sentence.push('many');
            sentence.push(pluralize(options.rightModel.name));
        }

        return sentence.join(' ');
    }

    function updateTitle(){
        options.title = getModelLabel(options.rightModel, options.rightMode);
    }

    function showPivotTable(){
        return options.leftMode === 'n' && options.rightMode === 'n';
    }

    function getPivotTableName(){
        var modelNames = [ options.leftModel.name.toLowerCase(), options.rightModel.name.toLocaleLowerCase() ];
        var sortedNames = modelNames.sort((a, b) => {
            if(a < b){
                return -1;
            }

            if(a > b){
                return 1;
            }

            return 0;
        });

        return sortedNames.join('_');
    }

    function showLeftColumn(){
        return options.columnPosition === 'left' || options.showPivotTable();
    }

    function showRightColumn(){
        return options.columnPosition === 'right' || options.showPivotTable();
    }
}