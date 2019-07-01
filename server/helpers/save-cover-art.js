const jetpack = require('fs-jetpack')
const fs = require('fs')
const request = require('request')

const coverArtFolder = `../client/public/img/cover_art/`

module.exports = saveCoverArt = {
  save(path, gameID) {
    const fileExtension = path.split('.').pop()
    //console.log('ext ', fileExtension)
    //console.log('path ', path)
    //console.log('gamID ', gameID)

    if (typeof path !== 'string' || typeof gameID !== 'string') {
      console.log('Image path/url and name need to be a string.');
      return;
    }
    if (this.checkPathType(path) === 'url') {
      console.log(`Received URL: ${path}`);
      return this.saveURL(path, gameID);
    }
    if (this.checkPathType(path) === 'path') {
      return this.savePath(path, gameID, fileExtension);
    }


  },

  checkPathType(path) {
    if (path && path.startsWith('http')) {
      return 'url';
    } else {
      return 'path';
    }
  },

  savePath(path, gameID, fileExtension) {
    if (jetpack.exists(path) === 'file') {
      const newFileName = `${gameID}.${fileExtension}`
      const newPath = coverArtFolder + newFileName
      jetpack.copy(path, newPath, { overwrite: true });
      console.log(`copied ${path} to ${newPath}`);

      //this line is kind of unnecessary because we aren't currently using the cover_art property to get the cover_art
      //updateGame(gameID, {cover_art: newPath})
      return
    }
  },

  async saveURL (url, gameID) {
    const fileExtension = url.split('.').pop()
    const fileName = `${coverArtFolder}${gameID}.${fileExtension}`

    await request.head(url, (err, res, body) => {
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);

      request(url).pipe(fs.createWriteStream(fileName)).on('close', () => console.log('downloaded image'))
    })

    return `${gameID}.${fileExtension}`
  }
}

//saveCoverArt.save('https://cdn.thegamesdb.net/images/original/boxart/front/2756-1.jpg', 'VwSf95kYMo')