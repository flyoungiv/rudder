import React from "react";
import { Segment, Button, Grid, Header, Icon, Image, Checkbox, Input, Divider } from "semantic-ui-react";
const img = './assets/img/clr.jpg';

export default class GameConfigWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.state.open = false;
    }

    render() {
        return (
            <Segment>
                <Header as='h3'>
                    <Icon name='settings' />
                    <Header.Content>
                        {this.props.gameName}
                        <Header.Subheader>Manage preferences for this game</Header.Subheader>
                    </Header.Content>
                </Header>
                <Divider />
                <Header as='h4'>COVER ART</Header>
                <Segment secondary>
                    <Grid columns={2}>
                        <Grid.Row verticalAlign="middle">
                            <Grid.Column textAlign="left">
                                <Image size="small" src={img} />
                            </Grid.Column>
                            <Grid.Column textAlign="right">
                                <Button icon labelPosition='left'>
                                    <Icon name='folder outline' />
                                    Browser Computer
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
                    <Input fluid action={{ icon: 'folder open outline' }} value={this.props.gamePath} />
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

{/* <div>
                <Header as='h2'>
                    <Icon name='settings' />
                    <Header.Content>
                        {this.props.gameName}
                        <Header.Subheader>Manage preferences for this game</Header.Subheader>
                    </Header.Content>
                </Header>
                        <Header as='h4'>Couch Mode</Header>
                        <Checkbox toggle label={<label>Show game in Couch Mode</label>} />
                        <Header as='h4'>Game Executable</Header>
                        <Input fluid action={{ icon: 'folder open outline' }} value={this.props.gamePath} />
                        <br />
                        <Input fluid label='Arguments' placeholder='(Optional)' />
                        <Header as='h4'>Cover Art</Header>
                        <Button.Group>
                            <Button>Browse Computer</Button>
                            <Button.Or />
                            <Button primary>Get Automatically</Button>
                        </Button.Group>
                        <Divider hidden />
                        <Image src={img} size='small' />
                        <Header as='h4'>Delete Game from Library</Header>
                        <p>Type DELETE below and then click the trash can to remove this game from your library. This will not delete
                            the game from your computer.</p>
                        <Input action={{ icon: 'trash alternate outline', color: 'red' }} placeholder='DELETE' />
                    <Button className="black deny">Nevermind</Button>
                    <Button positive content='Save' icon='checkmark' labelPosition='right' />
                    </div> */}