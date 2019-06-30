const express = require('express')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')

const adapter = new FileSync('db.json')
const db = low(adapter)

const game = 
  db.get('games')
    .find({rudder_id: 'gl7L1V7PVWB'})
    .value()


game.message = 'Game has been deleted from library'
console.log(game)