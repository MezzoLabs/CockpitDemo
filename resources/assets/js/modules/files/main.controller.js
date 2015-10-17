import File from './File';
import Folder from './Folder';

class FilesMainController {

    /*@ngInject*/ constructor($scope, fileManager){
        this.$scope = $scope;
        this.fileManager = fileManager;

        this.selected = null;
        this.library = new Folder('Library');
        var folder1 = new Folder('folder1', this.library);
        var folder2 = new Folder('folder2', this.library);
        var folder3 = new Folder('folder3', folder1);
        folder1.files = [
            folder3,
            new File('File 3', 'file3', 'mp3')
        ];

        this.library.files = [
            folder1,
            folder2,
            new File('File 1', 'file1', 'txt'),
            new File('File 2', 'file2', 'jpg')
        ];

        this.folder = this.library;
        this.files = this.library.files;

        fileManager.onDrop = (droppable, draggable) => {
            var files = this.sortedFiles();
            var folderIndex = $(droppable).data('index');
            var draggedIndex = $(draggable).data('index');
            var folder = files[folderIndex];
            var dragged = files[draggedIndex];

            this.deleteFile(dragged);

            if(dragged.isFolder){
                dragged.parent = folder;
            }

            folder.files.push(dragged);
            this.$scope.$apply();
        };
    }

    selectFile(file){
        if(file === this.selected){
            this.selected = null;

            return;
        }

        this.selected = file;
    }

    enterFolder(file){
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

    showFolderHierarchy(){
        return this.category().everything && !this.search;
    }

    showCategoryAsFolderHierarchy(){
        return !this.category().everything && !this.search;
    }

    addFolder(name){
        if(!name){
            return false;
        }

        this.folderName = '';
        var folder = new Folder(name, this.folder);

        this.folder.files.push(folder);
        $('div.modal').modal('hide');
    }

    getFiles(){
        if(this.search){
            return this.searchFiles();
        }

        var category = this.fileManager.category;

        if(category.everything){
            return this.files;
        }

        var filteredFiles = [];

        this.allFiles().forEach(file => {
            if(category.filter(file)){
                filteredFiles.push(file);
            }
        });

        return filteredFiles;
    }

    searchFiles(){
        var files = this.allFiles();
        var found = [];
        var lowerSearch = this.search.toLowerCase();

        files.forEach(file => {
           if(file.title.toLowerCase().indexOf(lowerSearch) !== -1){
               found.push(file);
           }
        });

        return found;
    }

    sortedFiles(){
        var files = this.getFiles();
        var folders = [];
        var notFolders = [];

        files.forEach(file => {
            if(file.isFolder){
                folders.push(file);
            } else {
                notFolders.push(file);
            }
        });

        return folders.concat(notFolders);
    }

    allFiles(folder = this.library){
        var files = [];

        folder.files.forEach(file => {
            files.push(file);

            if(file.isFolder){
                files = files.concat(this.allFiles(file));
            }
        });

        return files;
    }

    items(file){
        var count = 0;

        if(file.isFolder){
            count = file.files.length;
        }

        return count + ' ' + (count === 1 ? 'item': 'items');
    }

    category(){
        return this.fileManager.category;
    }

    deleteFiles(){
        if(this.canDelete()){
            var file = this.selected;

            swal({
                title: 'Sind Sie sicher?',
                text: 'Die folgenden Dateien werden unwiderruflich gelöscht: ' + file.title,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ja, Dateien löschen!',
                confirmButtonColor: '#fb503b',
                cancelButtonText: 'Abbrechen'
            }, confirmed => {
                if(!confirmed){
                    return;
                }

                this.deleteFile(file);
            });
        }
    }

    deleteFile(file){
        for(var i = 0; i < this.files.length; i++){
            if(file === this.files[i]){
                this.files.splice(i, 1);
                this.$scope.$apply();

                return;
            }
        }
    }

    canDelete(){
        return this.selected;
    }

}

export default { name: 'FilesMainController', controller: FilesMainController };