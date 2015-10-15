class FilesAsideController {

    /*@ngInject*/ constructor(){
        this.categories = [
            { label: 'Everything', icon: 'ion-ios-home' },
            { label: 'Images', icon: 'ion-ios-photos' },
            { label: 'Videos', icon: 'ion-ios-videocam' },
            { label: 'Audio', icon: 'ion-ios-mic' },
            { label: 'Documents', icon: 'ion-ios-paper' }
        ];
        this.category = this.categories[0];
        this.orderOptions = [ 'Title', 'Last modified' ];
        this.orderBy = this.orderOptions[0];
    }

    isActive(category){
        if(category === this.category){
            return 'active';
        }
    }

    selectCategory(category){
        this.category = category;
    }

}

export default { name: 'FilesAsideController', controller: FilesAsideController };