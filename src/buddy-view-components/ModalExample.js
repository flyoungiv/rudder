import React from "react";
import { Modal, Header } from "semantic-ui-react";

export default class ModalTest extends React.Component {
  //state = { openModal: false };
  constructor(props) {
      super(props);
      this.state = { openModal: false };
      this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal () {
      this.setState(state => ({ openModal: !state.openModal }));
  }

  render() {
    const { openModal } = this.state;
    return (
      <div>
        <button onClick={this.toggleModal}>Toggle Modal</button>
        <Modal open={openModal} closeIcon onClose={this.toggleModal}>
          <Header icon="browser" content="I' m a header" />
          <Modal.Content>
            <h3>I'm a content</h3>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}