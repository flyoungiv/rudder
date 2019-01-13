const jetpack = require('fs-jetpack');

//const gamesDir = '../../data/games';
//console.log(jetpack.inspectTree(gamesDir).children[4].children);
//console.log(jetpack.inspectTree(gamesDir));

const folders = jetpack.inspectTree('../../data/games');
console.log(folders);

export default folders