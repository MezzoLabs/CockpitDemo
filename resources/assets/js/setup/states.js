class State {

    constructor(name, url, templateUrl, controller){
        this.name = name;
        this.route = { url, templateUrl, controller };
    }

}

export default [
    new State('pages', '/cockpit/pages', 'pages/pages.html', 'PagesController'),
    new State('models', '/cockpit/models', 'model-builder/model-builder.html')
];