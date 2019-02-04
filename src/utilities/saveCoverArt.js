import jetpack from 'fs-jetpack';
import { games } from '../data/library.json';

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
            this.savePath(path, gameName, fileExtension);
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
            const newPath = `./src/assets/img/cover_art/${gameName}.${fileExtension}`;
            jetpack.copy(path, newPath, {overwrite: true});
            console.log(`copied ${path} to ${newPath}`);
            this.updateLibraryJSON(gameName, {cover_art: newPath});
            console.log('updated library.json');
        }
    },

    updateLibraryJSON (gameName, gameObject) {
        const index = games.findIndex( game => game.game_title === gameName );
        const existing = games[index];
        const updatedGameObject = {
            'id': existing.id,
            'game_title': existing.game_title,
            'shortcut': existing.shortcut,
            'cover_art': gameObject.cover_art
        }
        games.splice(index, 1, updatedGameObject);
        jetpack.write('./src/data/library.json', games)
    }


}

export default saveCoverArt;