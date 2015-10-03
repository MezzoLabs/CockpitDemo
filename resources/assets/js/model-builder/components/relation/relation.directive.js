import Component from '../Component';

module.exports = new Component('mezzoRelation', 'relation/relation.html', modifyOptions);

function modifyOptions(options){
    options.title = 'Title';
    options.leftMode = '1';
    options.rightMode = '1';
    options.leftModel = { id: 0, name: 'Tutorial' };
    options.models = [
        { id: 1, name: 'User' },
        { id: 2, name: 'Category'}
    ];

    options.getModelLabel = getModelLabel;

    function getModelLabel(model, mode){
        switch(mode){
            case '1': return model.name;
            case 'n': return pluralize.plural(model.name);
            default: return model.name;
        }
    }
}