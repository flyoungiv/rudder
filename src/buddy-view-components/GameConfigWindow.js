import React from "react";
import { Segment, Button, Grid, Header, Icon, Image, Checkbox, Input, Divider } from "semantic-ui-react";
import { ipcRenderer, platform } from 'electron';
import saveCoverArt from '../utilities/saveCoverArt';

//const img  './assets/img/clr.jpg';

export default class GameConfigWindow extends React.Component {
    componentDidMount () {

        //set up file dialog listener for choosing a new cover art from user's computer
        ipcRenderer.on('selected-directory', (event, path) => {
            const fileExtension = path[0].split('.').pop();
            saveCoverArt.save(path[0], this.props.game.game_title, fileExtension);
            });
    }

    render() {
        const { game } = this.props;
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
                                <Image size="small" src={`./assets/img/cover_art/${game.cover_art}`} />
                            </Grid.Column>
                            <Grid.Column textAlign="right">
                                <Button
                                    icon
                                    labelPosition='left'
                                    onClick={ () => ipcRenderer.send('open-file-dialog') }>
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
                    <Input fluid action={{ icon: 'folder open outline' }} value={game.shortcut} />
                    <Divider hidden />
                    <Input fluid label='Arguments' placeholder='(Optional)' />
                </Segment>
                <Header as='h4'>DELETE GAME FROM LIBRARY</Header>
                <Segment secondary>
                    <p>Type DELETE below and then click the trash can to remove this game from your library. This will not delete
                            the game from your computer.</p>
                    <Input action={{ icon: 'trash alternate outline', color: 'red' }} placeholder='DELETE' />
                </Segment>
            </Segment>
        );
    }
}