import updateGame from './update-game'
const jetpack = window.require('fs-jetpack');


const coverArtFolder = `${process.env.REACT_APP_PUBLIC_FOLDER}/img/cover_art/`

const saveCoverArt = {
    save (path, gameID) {
        const fileExtension = path.split('.').pop()
        //console.log('ext ', fileExtension)
        //console.log('path ', path)
        //console.log('gamID ', gameID)

        if (typeof path !== 'string' || typeof gameID !== 'string' ) {
            console.log('Image path/url and name need to be a string.');
            return;
        } 
        if (this.checkPathType(path) === 'url') {
            console.log(`Received url ${path}.`);
            return;
        }
        if (this.checkPathType(path) === 'path') {
            return this.savePath(path, gameID, fileExtension);
        }
        

        },

    checkPathType (path) {
        if ( path && path.startsWith('http') ) {
            return 'url';
        } else {
            return 'path';
        }
    },

    savePath (path, gameID, fileExtension) {
        if (jetpack.exists(path) === 'file') {
            const newFileName = `${gameID}.${fileExtension}`
            const newPath = coverArtFolder + newFileName
            jetpack.copy(path, newPath, {overwrite: true});
            console.log(`copied ${path} to ${newPath}`);
            
            //this line is kind of unnecessary because we aren't currently using the cover_art property to get the cover_art
            updateGame(gameID, {cover_art: newPath})
            return
        }
    }
}

export default saveCoverArt;