const createNewGame = (game) => {

  const body = {}

  //only send properties that exist in the function call
  if (game.game_title) body.title = game.game_title
  if (game.shortcut) body.path = game.shortcut
  if (game.cover_art) body.cover_art = game.cover_art

  console.log(body.title)
  console.log(JSON.stringify(body.shortcut))
  console.log(JSON.stringify(body))

  fetch(`${process.env.REACT_APP_SERVER_URL}/games`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}

export default createNewGame