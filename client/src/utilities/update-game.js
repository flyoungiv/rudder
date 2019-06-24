const updateGame = async (rudderID, game) => {

    const body = {}

    //only send properties that exist in the function call
    if (game.game_title) body.title = game.game_title
    if (game.shortcut) body.shortcut = game.shortcut
    if (game.cover_art) body.cover_art = game.cover_art

    await fetch(`${process.env.REACT_APP_SERVER_URL}/games/${rudderID}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
    .then(response => console.log(response.json))
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

export default updateGame