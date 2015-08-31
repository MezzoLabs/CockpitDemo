export default [
    {
        name: 'pages',
        route: {
            url: '/cockpit/pages',
            views: {
                main: {
                    templateUrl: 'pages/pages.html',
                    controller: 'PagesController'
                }
            }
        }
    }, {
        name: 'models',
        route: {
            url: '/cockpit/models',
            views: {
                aside: {
                    templateUrl: 'model-builder/aside.html',
                    controller: 'ModelBuilderController'
                },
                main: {
                    templateUrl: 'model-builder/main.html',
                    controller: 'ModelBuilderController'
                }
            }
        }
    }
];