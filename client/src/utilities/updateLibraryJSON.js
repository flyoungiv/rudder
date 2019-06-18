import library from '../data/library.json';
import jetpack from 'fs-jetpack';

const updateLibraryJSON = (gameName, gameObject) => {
    const index = library.games.findIndex( game => game.game_title === gameName );
    const existing = library.games[index];
    const updatedGameObject = {
        'id': existing.id,
        'game_title': existing.game_title,
        'shortcut': existing.shortcut,
        'cover_art': gameObject.cover_art
    }
    library.games.splice(index, 1, updatedGameObject);
    jetpack.write('./src/data/library.json', library);
    return updatedGameObject;
};

export default updateLibraryJSON;