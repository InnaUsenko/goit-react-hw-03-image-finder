import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

class App extends Component {
  appStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    paddingBottom: '24px',
  };
  render() {
    return (
      <div style={this.appStyles}>
        <Searchbar />
      </div>
    );
  }
}

export default App;
