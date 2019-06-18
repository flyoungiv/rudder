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

app.put('/games/:id', (req, res) => {
  db.get('games')
    .find({ rudder_id: req.params.id })
    .assign({ game_title: req.body.title, shortcut: req.body.path, cover_art: req.body.cover_art })
    .write()
  res.status(200).json(`Updated game ${req.params.id} to be named "${req.body.title}"`)
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
//Start App
//====================================
app.listen(3001, () => console.log('Server listening on port 3000'))