import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
