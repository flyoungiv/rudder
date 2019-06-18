import React, { useState, useEffect } from "react";
import { Segment, Button, Grid, Header, Icon, Image, Checkbox, Input, Divider } from "semantic-ui-react";

const { ipcRenderer } = window.require('electron');
//import { ipcRenderer, platform } from 'electron';
//import saveCoverArt from '../utilities/saveCoverArt';
//import refreshGameConfigWindow from '../utilities/refreshGameConfigWindow';

//const img  './assets/img/clr.jpg';

const deleteGame = gameID => {
  // Default options are marked with *
  return fetch(`http://localhost:3001/games/${gameID}`, {
    method: 'DELETE',
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: null, // body data type must match "Content-Type" header
  })
    .then(response => console.log(response.json())); // parses JSON response into native Javascript objects 
}

const GameConfigWindow = (props) => {

  const [game, setGame] = useState({ rudder_id: null, game_title: null, shortcut: '', cover_art: null })
  const gameID = props.match.params.id

  useEffect(() => {
    fetch(`http://localhost:3001/games/${gameID}`)
      .then(response => response.json())
      .then(data => setGame({ rudder_id: data.rudder_id, game_title: data.game_title, shortcut: data.shortcut, cover_art: data.cover_art }))
      .catch(() => console.log(`Didn't find a game with that ID`))
  })

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
                src={`${process.env.PUBLIC_URL}/img/cover_art/${game.game_title}.jpg`}
              />
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Button
                icon
                labelPosition='left'
                //onClick={() => console.log('click')}
                onClick={() => ipcRenderer.send('open-file-dialog')}>


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
          <input />
          <Button
            icon
            onClick={() => deleteGame(game.rudder_id)}
          >
            <Icon name='trash alternate outline' color='red'></Icon>
          </Button>
        </Input>
      </Segment>
    </Segment>
  );
}

export default GameConfigWindow