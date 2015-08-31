export default [
    {
        name: 'pages',
        route: {
            url: '/cockpit/pages',
            views: {
                aside: {
                    templateUrl: 'pages/aside.html',
                    controller: 'PagesAsideController'
                },
                main: {
                    templateUrl: 'pages/main.html',
                    controller: 'PagesMainController'
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
    }, {
        name: 'panels',
        route: {
            url: '/cockpit/panels',
            views: {
                main: {
                    templateUrl: 'panels/panels.html'
                }
            }
        }
    }
];