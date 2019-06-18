import jetpack from 'fs-jetpack';
import updateLibraryJSON from './updateLibraryJSON';

const saveCoverArt = {
    save (path, gameName, fileExtension) {
        if (typeof path !== 'string' || typeof gameName !== 'string' ) {
            console.log('Image path/url and name need to be a string.');
            return;
        } 
        if (this.checkPathType(path) === 'url') {
            console.log(`Received url ${path}.`);
            return;
        }
        if (this.checkPathType(path) === 'path') {
            return this.savePath(path, gameName, fileExtension);
        }
        

        },

    checkPathType (path) {
        if ( path && path.startsWith('http') ) {
            return 'url';
        } else {
            return 'path';
        }
    },

    savePath (path, gameName, fileExtension) {
        if (jetpack.exists(path) === 'file') {
            const newFileName = `${gameName}.${fileExtension}`
            const newPath = `./src/assets/img/cover_art/${newFileName}`;
            jetpack.copy(path, newPath, {overwrite: true});
            console.log(`copied ${path} to ${newPath}`);
            const updatedGameObject = updateLibraryJSON(gameName, {cover_art: newFileName});
            console.log('updated library.json');
            return updatedGameObject;
        }
    }
}

export default saveCoverArt;