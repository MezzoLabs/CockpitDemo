import Component from '../Component';

module.exports = new Component('mezzoRelation', 'relation/relation.html', modifyOptions);

function modifyOptions(options){
    options.title = 'Title';
    options.mode = '1';
}