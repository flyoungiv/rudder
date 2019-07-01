const jetpack = require('fs-jetpack')

module.exports = class SteamCrawler {

  crawl (dir) {
    const manifestFiles = this.findManifestFiles(dir)
    return this.parseManifestFiles(manifestFiles)
  }

  findManifestFiles(dir) {
    return jetpack.find(dir, { matching: 'appmanifest*.acf', recursive: false })
  }

  parseManifestFiles(files) {

    const games = []

    files.forEach(file => {

      const game = {}
      const lines = jetpack.read(file).split('\n')
      
      game.steamAppID = lines.filter(line => line.match('"appid"'))[0].replace(/\s*\"appid\"\s+\"(\d+)\"\s*/,'$1').trim()
      game.gameTitle = lines.filter(line => line.match('"name"'))[0].replace(/\s*\"name\"\s+\"([^\"]*)\"\s*/,'$1').trim()
      game.command = `steam://rungameid/${game.steamAppID}`

      games.push(game)
    })

    return games
  }

}