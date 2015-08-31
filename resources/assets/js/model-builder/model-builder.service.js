export default { name: 'modelBuilder', service };

/*@ngInject*/ function service(componentService, uid){
    return new ModelBuilder(componentService, uid);
}

class ModelBuilder {

    constructor(componentService, uid){
        this.componentService = componentService;
        this.uid = uid;
        this.fields = [];
        this.tab = 'add';
        this.selectedField = null;
    }

    addField(name){
        var field = {
            id: this.uid(),
            name: name,
            options: {},
            mainDirective: 'mezzo-' + name,
            optionsDirective: 'mezzo-' + name + '-options'
        };

        this.componentService.setOptions(field.options);
        this.fields.push(field);
    }

    deleteField(deleted){
        this.tab = 'add';
        this.selectedField = null;

        for(var i = 0; i < this.fields.length; i++){
            var field = this.fields[i];

            if(field.id === deleted.id){
                this.fields.splice(i, 1);
                return;
            }
        }
    }

    selectField(field){
        this.tab = 'edit';
        this.selectedField = field;

        this.componentService.setOptions(field.options);
    }

}