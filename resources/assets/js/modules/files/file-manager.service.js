export default { name: 'fileManager', service };

/*@ngInject*/ function service(){
    return new FileManagerService();
}

class FileManagerService {

    constructor(){
        this.category = null;
    }

}