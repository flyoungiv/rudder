const express = require('express')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')

const adapter = new FileSync('db.json')
const db = low(adapter)

//set db defaults in case it doesn't exist already
db.defaults({ games: [], settings: {} })
  .write()

const app = express()

app.use(express.json()) //can't read request body without this


//allow CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//====================================
//GET
//====================================

//get full list of games
app.get('/games', (req, res) => {
  res.json(db.get('games').value())
})

//get game by id
app.get('/games/:id', (req, res) => {
  res.json(db.get('games').find({ rudder_id: req.params.id }).value())
})


//====================================
//CREATE
//====================================

app.post('/games', (req, res) => {

  const message =
  {
    error: 'POST requests should have the below properties (title is required)',
    title: 'string (required)',
    path: 'string',
    cover_art: 'string',
    rudder_id: 'string (system-generated, pass in a value to override)'
  }

  if (!req.body.title) {
    console.log(req.body.title)
    res.status(400).json(message)
  }
  else {
    const game = {
      rudder_id: !req.body.rudder_id ? shortid.generate() : req.body.rudder_id,
      game_title: req.body.title,
      shortcut: req.body.path,
      cover_art: req.body.cover_art
    }

    db.get('games')
      .push(game)
      .write()
    res.status(201).json(game)
  }
})

//====================================
//UPDATE
//====================================

//udate a game's attributes
app.put('/games/:id', (req, res) => {

  if (!req.body.title && !req.body.shortcut && !req.body.cover_art) {

    const message = {
      error: 'PUT requests should probably include at least one field you want to update',
      title: 'Updated Title',
      shortcut: '/Updated/Shortcut.exe',
      cover_art: '/Updated/Cover/Art.jpg'
    }

    res.status(400).json(message)

  } else {

    const game = {}

    //avoid adding any of the below properties if they would NULL out an existing value
    if (req.body.title) game.game_title = req.body.title
    if (req.body.shortcut) game.shortcut = req.body.shortcut
    if (req.body.cover_art) game.cover_art = req.body.cover_art

    db.get('games')
      .find({ rudder_id: req.params.id })
      .assign(game)
      .write()
    res.status(200).json(game)
  }
})

//update cover art
app.get('/artwork/:id', (req, res) => {

  const rudderID = req.params.id
  const gameTitle =
    db.get('games')
      .find({ rudder_id: req.params.id })
      .value().game_title

  const getCoverArt = require('./helpers/get-cover-art')
  const saveCoverArt = require('./helpers/save-cover-art')

  console.log('attempting to retrieve cover art', rudderID, gameTitle)

  const saveArtFromWeb = async (rudderID, gameTitle) => {
    const coverArtURL = await getCoverArt.getCoverArtURL(gameTitle)
    const localFileName = await saveCoverArt.save(coverArtURL, rudderID)

    db.get('games')
      .find({ rudder_id: rudderID })
      .assign({ cover_art: localFileName })
      .write()

    res.status(200).json({ rudder_id: rudderID, cover_art: localFileName })
  }

  saveArtFromWeb(rudderID, gameTitle)
})

//====================================
//DELETE
//====================================

app.delete('/games/:id', (req, res) => {

  const game =
    db.get('games')
      .find({ rudder_id: req.params.id })
      .value()

  if (!game) {
    res.status(404).json(`Bummer... No game found with rudder_id: ${req.params.id}`)
  }

  db.get('games')
    .remove({ rudder_id: req.params.id })
    .write()

  game.message = 'Game has been deleted from library. RIP.'
  res.status(200).json(game)
})

//====================================
// CRAWLER
//====================================
app.post('/crawler', (req, res) => {

  if (req.body.platform === 'steam' && req.body.path) {

    //pass this in with through the route
    const steamDir = req.body.path

    const SteamCrawler = require('./crawlers/SteamCrawler')
    const crawler = new SteamCrawler()

    const games = crawler.crawl(steamDir)

    games.forEach(game => {

      if (db.get('games').find({ steam_id: game.steamAppID }).value()) return //if game exists already, return and check the next game

      const newGame = {
        rudder_id: shortid.generate(),
        game_title: game.gameTitle,
        shortcut: game.command,
        platform: 'steam',
        steam_id: game.steamAppID
      }

      db.get('games')
        .push(newGame)
        .write()

    })

    res.status(201).json(db.get('games').value()) //finish by returning full library
  
  } else {

    const message = {
      error: 'must include a platform and a path where games can be found',
      platform: 'string (e.g. steam)',
      path: 'C:/Path/to/library/'
    }

    res.status(404).json(message)
  }
})

  //====================================
  //Start App
  //====================================
  app.listen(3001, () => console.log('Server listening on port 3001'))