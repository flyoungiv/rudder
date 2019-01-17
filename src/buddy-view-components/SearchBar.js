import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const SearchBar = ({ search }) => (
  <Menu className="top fixed">
    <Menu.Item>
      <Input
        className="big transparent left icon"
        icon="gamepad"
        placeholder="Start typing to filter games..."
        onChange={event => search(event.target.value)}
      />
    </Menu.Item>
  </Menu>
);

export default SearchBar;
