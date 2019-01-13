import React from 'react';

class NewDart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { powerLevel: 9000, excitement: 'very high' };

  }
  render() {
    return(
      <div>
        hello folks, the excitement in the stadium today is {this.state.excitement}<br />
        we'd like to welcome {this.props.name == null ? 'NO-ONE' : this.props.name} to the starting line
      </div>
    );
  }
}

export default NewDart;