const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ games: [], settings: {} })
  .write()

//pass this in with through the route
const steamDir = 'D:\\Games\\Steam\\steamapps'

const SteamCrawler = require('../crawlers/SteamCrawler')
const crawler = new SteamCrawler()

const games = crawler.crawl(steamDir)

console.log(games)

games.forEach(game => {

  if (db.get('games').find({ steam_id: game.steamAppID }).value()) return //if game exists already, return and check the next game

  const newGame = {
    rudder_id: shortid.generate(),
    game_title: game.gameTitle,
    shortcut: game.command,
    game_type: 'steam',
    steam_id: game.steamAppID
  }

  db.get('games')
    .push(newGame)
    .write()

})

res.status(201).json(db.get('games').value()) //finish by returning full library