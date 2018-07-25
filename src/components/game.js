import React, { Component } from 'react';
import { connect } from 'react-redux'
import Player from './player'
import Background from './background'
import Obstacles from './obstacles';

class Game extends Component {
 
    // if player and obstacles hit eac other stop the game 

    //figure out scoring

    //

    render() {
    return (
        <div style={{
            position: 'relative',
            width: '1200px',
            height: '600px',
            margin: '20px auto', 
            border: '4px solid pink',
        }}
        >
            <Background />
            <Player />
            <Obstacles />
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        ...state.obstacles,
        ...state.player
    }
}

export default Game;