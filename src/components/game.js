import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addObstaclesToState, removeObstaclesFromState, resetGamePlayer, resetGameBackground, resetGameObstacles, resetGameStatus } from '../actions/index'
import Player from './player'
import Background from './background'
import Row from './row';

class Game extends Component {
 
    // if player and obstacles hit eac other stop the game 

    //figure out scoring

    createRow = (rowID) => {
        return <Row key={rowID}/> 

    }

    startGame = () => {
        let rowID = 1
        // let inter = (setInterval(() => this.props.removeObstaclesFromState(), 1500))
        this.addObstacleInterval = setInterval(() => {
            this.props.addObstaclesToState(this.createRow(rowID))
            rowID++
        }, 1500);
       setTimeout(() => (this.removeObstacleInterval = setInterval(() => this.props.removeObstaclesFromState(), 1500)), 5652)
    }

    // resetGame = () => {
    //     this.props.resetGameStatus();
    //     this.props.resetGamePlayer();
    //     this.props.resetGameObstacles();
    //     this.props.resetGameBackground();
    // }

    componentDidMount = () =>{
        this.startGame()
    }

    componentWillUnmount = () => {
        
        clearInterval(this.removeObstacleInterval);
        clearInterval(this.addObstacleInterval);
                    
    }
     

    

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
            {this.props.obstaclesRowArr}
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        ...state.obstacles,
        ...state.player,
        ...state.game,
        ...state.background
    }
}

export default connect(mapStateToProps,{addObstaclesToState, removeObstaclesFromState, resetGamePlayer, resetGameBackground, resetGameObstacles, resetGameStatus})(Game);