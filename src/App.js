import React, { Component } from 'react';
import Game from './components/game'
import Score from './components/score'
// import Player from './components/player'
// import { Loop, Stage } from 'react-game-kit';

class App extends Component {
  
 
  render() {
    return (
      <div className="App">
        <h1 align='center'> Football Game </h1>
        <Game />
        <div align='center'>
          <Score />
        </div>
      </div>
    );
  }
}

export default App;
