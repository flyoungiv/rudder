const fs = require('fs');
let gameList = [];

let folders = fs.readdirSync('../img/cover_art');

for (let i = 0; i < folders.length; i++) {
  gameList[i] = []
  gameList[i].push(folders[i]);
  let images = fs.readdirSync(`../img/cover_art/${folders[i]}`);
  gameList[i].push(images[0]);
}


let data = JSON.stringify(gameList);

fs.writeFileSync('./gameList.json', data);



