import React, { Component } from 'react';

class App extends Component {
  appStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    paddingBottom: '24px',
  };
  render() {
    return <div style={this.appStyles}>React homework template</div>;
  }
}

export default App;
