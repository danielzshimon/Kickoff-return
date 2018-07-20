import React, { Component } from 'react';
import { connect } from 'react-redux'
import Player from './player'
import Background from './background'

class Game extends Component {
  render() {
    return (
        <div style={{
            position: 'relative',
            width: '1000px',
            height: '500px',
            margin: '20px auto', 
            border: '4px solid pink',
        }}>
            <Background />
            <Player />
        </div>
    );
  }
}


export default Game;