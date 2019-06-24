import React, { useState, useEffect, useRef } from "react"
import { Segment, Button, Grid, Header, Icon, Image, Checkbox, Input, Divider } from "semantic-ui-react"
import saveCoverArt from '../utilities/save-cover-art'
import updateGame from '../utilities/update-game'

const { ipcRenderer, remote } = window.require('electron')
//import saveCoverArt from '../utilities/saveCoverArt';
//import refreshGameConfigWindow from '../utilities/refreshGameConfigWindow';

const deleteGame = (gameID, textConfirmation) => {
  console.log(`trying to delete game ${gameID}`)
  if (textConfirmation.toUpperCase() !== 'DELETE') {
    return
  }
  else {
    return fetch(`http://localhost:3001/games/${gameID}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: null
    })
      .then(() => { 
        ipcRenderer.sendSync('update-game-library', 'a game has been deleted')
        remote.getCurrentWindow().close() 
      })
    //.then(response => console.log(response.json())) // parses JSON response into native Javascript objects 
  }
}

const uppercaseStyle = {
  textTransform: 'uppercase'
}

const GameConfigWindow = (props) => {

  const [game, setGame] = useState({ rudder_id: null, game_title: null, shortcut: '', cover_art: null })
  const gameID = props.match.params.id
  const deleteEl = useRef(null)

  useEffect(() => {

    fetch(`http://localhost:3001/games/${gameID}`)
      .then(response => response.json())
      .then(data => setGame({ rudder_id: data.rudder_id, game_title: data.game_title, shortcut: data.shortcut, cover_art: data.cover_art }))
      .catch(() => console.log(`Didn't find a game with that ID`))

    //listener for choosing cover art via system dialog
    ipcRenderer.on('selected-cover-art', (event, path) => {
      console.log('created new selected-cover-art listener')
      saveCoverArt.save(path[0], gameID)
      ipcRenderer.sendSync('update-game-library', 'message sent from game config window')
    })

    ipcRenderer.on('selected-executable', (event, path) => {
      console.log('created new selected-executable listener')
      updateGame(gameID, { shortcut: game.shortcut })
    })

    //destroy the file dialog listener or we will keep re-creating it
    // return () => {
    //   console.log('got rid of all existing selected-directory listeners')
    //   ipcRenderer.removeAllListeners('selected-directory')
    // }
  }, [gameID])

  return (
    <Segment>
      <Header as='h3'>
        <Icon name='settings' />
        <Header.Content>
          {game.game_title}
          <Header.Subheader>Manage preferences for this game</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider />
      <Header as='h4'>COVER ART</Header>
      <Segment secondary>
        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column textAlign="left">
              <Image
                size="small"
                //src={`./assets/img/cover_art/${game.cover_art}`}
                src={`${process.env.PUBLIC_URL}/img/cover_art/${game.rudder_id}.png`}
              />
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Button
                icon
                labelPosition='left'
                //onClick={() => console.log('click')}
                onClick={() => ipcRenderer.send('find-art-dialog')}>


                <Icon name='folder outline' />
                Browse Computer
                                </Button>
              <Divider hidden />
              <Button primary icon labelPosition='left'>
                <Icon name='cloud download' />
                Get Automatically
                                </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h4'>COUCH MODE</Header>
      <Segment secondary>
        <Checkbox toggle label={<label>Show game in Couch Mode</label>} />
      </Segment>
      <Header as='h4'>GAME EXECUTABLE</Header>
      <Segment secondary>
        <Input
          fluid
          action={{ icon: 'folder open outline' }}
          value={game.shortcut}
        />
        <Divider hidden />
        <Input fluid label='Arguments' placeholder='(Optional)' />
      </Segment>
      <Header as='h4'>DELETE GAME FROM LIBRARY</Header>
      <Segment secondary>
        <p>Type DELETE below and then click the trash can to remove this game from your library. This will not delete
                            the game from your computer.</p>

        <Input placeholder='DELETE' action>
          <input ref={deleteEl} style={uppercaseStyle} />
          <Button
            icon
            //onClick={() => deleteEl.current.value === 'DELETE' ? console.log('DELETE') : console.log('not DELETE')}
            onClick={() => deleteGame(game.rudder_id, deleteEl.current.value)}
          >
            <Icon name='trash alternate outline' color='red'></Icon>
          </Button>
        </Input>
      </Segment>
    </Segment>
  );
}

export default GameConfigWindow