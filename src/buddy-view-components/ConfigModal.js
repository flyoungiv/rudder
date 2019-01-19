import React from "react";
import { Button, Header, Icon, Image, Modal, Checkbox, Input, Divider } from "semantic-ui-react";
const img = require('../assets/img/clr.jpg');

export default class ConfigModal extends React.Component {
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
            <Modal
                trigger={<Button icon='settings' />}
            >
                <Header as='h2'>
                    <Icon name='settings' />
                    <Header.Content>
                        Game Settings
                        <Header.Subheader>Manage preferences for this game</Header.Subheader>
                    </Header.Content>
                </Header>
                <Modal.Content className="scrolling">
                    <Modal.Description>
                        <Header as='h4'>Couch Mode</Header>
                        <Checkbox toggle label={<label>Show game in Couch Mode</label>} />
                        <Header as='h4'>Game Executable</Header>
                        <Input fluid action={{ icon: 'folder open outline' }} placeholder='E:\Games\steam\steamapps\common\rockbreaker\rock-breaker.exe' />
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
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button className="black deny">Nevermind</Button>
                    <Button positive content='Save' icon='checkmark' labelPosition='right' />
                </Modal.Actions>
            </Modal>
        );
    }
}