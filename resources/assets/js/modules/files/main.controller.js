class File {

    constructor(title, name, extension){
        this.title = title;
        this.name = name;
        this.extension = extension;
        this.type = 'file';
        this.isFolder = false;
    }

    icon(){
        if(this.extension === 'png' || this.extension === 'jpg' || this.extension === 'gif'){
            return 'ion-image';
        }

        if(this.extension === 'mp4' || this.extension === 'avi'){
            return 'ion-ios-videocam';
        }

        if(this.extension === 'mp3'){
            return 'ion-music-note';
        }

        if(this.extension === 'txt' || this.extension === 'md'){
            return 'ion-document-text';
        }

        if(this.extension === 'pdf'){
            return 'ion-printer';
        }

        return 'ion-document';
    }

}

class Folder extends File {

    constructor(name, parent = null){
        super(name, name, '');

        this.parent = parent;
        this.type = 'folder';
        this.isFolder = true;
        this.files = [];
    }

}

class FilesMainController {

    /*@ngInject*/ constructor(){
        var library = new Folder('Library');
        var folder1 = new Folder('folder1', library);
        var folder2 = new Folder('folder2', library);
        var folder3 = new Folder('folder3', folder1);
        folder1.files = [
            folder3,
            new File('File 3', 'file3', 'mp3')
        ];

        library.files = [
            folder1,
            folder2,
            new File('File 1', 'file1', 'txt'),
            new File('File 2', 'file2', 'jpg')
        ];

        this.folder = library;
        this.files = library.files;
    }

    selectFile(file){
        if(file.isFolder){
            this.folder = file;
            this.files = file.files;
        }
    }

    folderHierarchy(){
        var folders = [];
        var folder = this.folder;

        while(folder){
            folders.push(folder);

            folder = folder.parent;
        }

        return folders.reverse();
    }

    addFolder(name){
        this.folderName = '';
        var folder = new Folder(name, this.folder);

        this.folder.files.push(folder);
        $('div.modal').modal('hide');
    }

}

export default { name: 'FilesMainController', controller: FilesMainController };