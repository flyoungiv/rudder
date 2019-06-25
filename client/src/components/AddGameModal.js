import React, { useState, useRef } from 'react'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import createNewGame from '../utilities/create-new-game'

const { ipcRenderer } = window.require('electron')

const yesText = ['Affirmative', 'Roger That', 'Boom', 'Fire Missiles', 'Do It', 'Oh Yeah', 'Let\'s Party', 'Car Wash Baby', 'You\'re muh Queen']

const AddGameModal = () => {

  const [yes, setYes] = useState('OK')
  const [modalOpen, setModalOpen] = useState(false)

  const titleRef = useRef(null)
  const pathRef = useRef(null)
  const artRef = useRef(null)

  const handleOpen = () => {
    setYes(yesText[Math.floor(Math.random() * yesText.length)]) //picks a random YES message
    setModalOpen(true)
  }

  const handleSubmit = () => {

    const newGame = {
      game_title: titleRef.current.inputRef.current.value,
      shortcut: pathRef.current.inputRef.current.value,
      cover_art: artRef.current.inputRef.current.value
    }

    createNewGame(newGame)
    ipcRenderer.send('update-game-library', 'message sent from game config window')
    setModalOpen(false)
  }

  return (
    <Modal
      open={modalOpen}
      trigger={
        <Button
          positive
          onClick={handleOpen}
          id="add-game-button">
          Add Game to Library
        </Button>
      } basic size='small'>
      <Header icon='gamepad' content='Add Game to Library' />
      <Modal.Content>
        <p>
          What game would you like to add?
      </p>
        <Input ref={titleRef} fluid label='Game' placeholder='Game Title' /><br />
        <Input ref={pathRef} fluid label='Executable' placeholder='C:/Path/to/Game.exe' /><br />
        <Input ref={artRef} fluid label='Cover Art' placeholder='C:/Path/to/Art.jpg' /><br />
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setModalOpen(false)}>
          <Icon name='remove' /> Nah
      </Button>
        <Button color='green' inverted onClick={handleSubmit}>
          <Icon name='checkmark' /> {yes}
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default AddGameModal