import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

const SearchBar = (props) => (
    <Menu className="top fixed">
      <Menu.Item>
        <Input
          className='large transparent left icon'
          icon='gamepad'
          placeholder='Start typing to filter games...'
          onChange={props.onKeyPress}
          />
      </Menu.Item>
    </Menu>
);


export default SearchBar