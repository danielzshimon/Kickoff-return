import React, { Component } from 'react';
import Game from './components/game'
import Score from './components/score'
import PlayGame from './components/playgame'
import GameOver from './components/gameover'
import { connect } from "react-redux";


class App extends Component {
  
 
  render() {
    return (
      <div className="App">
        {(this.props.gameStatus === 'playing') ?
        <div
>         <h1 align='center' > Game </h1>
          <Game />
          <div align='center'>
          <Score />
          </div>
        </div> : 
        (this.props.gameStatus === 'lost') ?
        <GameOver /> : 
        <PlayGame /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state.game
  }
}

export default connect(mapStateToProps)(App);
