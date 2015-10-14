import Mode from './Mode';

class Model {

    constructor(id, name){
        this.id = id;
        this.name = name;
        this.mode = Mode.ONE;
    }

    label(){
        if(this.mode === Mode.ONE){
            return this.name;
        }

        if(this.mode === Mode.MANY){
            return pluralize(this.name);
        }

        return this.name;
    }

}

export default Model;