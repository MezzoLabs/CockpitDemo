module.exports = app => {
	register(require('./common/compile.directive.js'));
	register(require('./common/uid.service.js'));
	register(require('./model-builder/model-builder.controller.js'));
<<<<<<< HEAD
	register(require('./pages/pages.controller.js'));
	register(require('./layout/content/content.directive.js'));
	register(require('./layout/quickview/quickview.directive.js'));
	register(require('./layout/sidebar/sidebar.directive.js'));
	register(require('./layout/topbar/topbar.directive.js'));
	register(require('./model-builder/components/component.service.js'));
	register(require('./model-builder/components/checkbox/checkbox-options.directive.js'));
	register(require('./model-builder/components/checkbox/checkbox.directive.js'));
	register(require('./model-builder/components/dropdown/dropdown-options.directive.js'));
	register(require('./model-builder/components/dropdown/dropdown.directive.js'));
=======
	register(require('./model-builder/components/component.service.js'));
	register(require('./model-builder/components/checkbox/checkbox-options.directive.js'));
	register(require('./model-builder/components/checkbox/checkbox.directive.js'));
>>>>>>> 90457c6ce66f439e7c7cdc24764addf459894806
	register(require('./model-builder/components/text-multi/text-multi-options.directive.js'));
	register(require('./model-builder/components/text-multi/text-multi.directive.js'));
	register(require('./model-builder/components/text-single/text-single-options.directive.js'));
	register(require('./model-builder/components/text-single/text-single.directive.js'));
<<<<<<< HEAD
=======
	register(require('./model-builder/components/dropdown/dropdown-options.directive.js'));
	register(require('./model-builder/components/dropdown/dropdown.directive.js'));
>>>>>>> 90457c6ce66f439e7c7cdc24764addf459894806

    function register(module){
        if(module.controller){
            return app.controller(module.name, module.controller);
        }

        if(module.directive){
            return app.directive(module.name, module.directive);
        }

        if(module.service){
            return app.factory(module.name, module.service);
        }
    }
};