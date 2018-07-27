import React, { Component } from 'react';
import { connect } from 'react-redux'
import Player from './player'
import Background from './background'
import Row from './row';

class Game extends Component {
 
    // if player and obstacles hit eac other stop the game 

    //figure out scoring

    

    crashWith = (obstacle) => {
        let myleft = this.props.position[0];
        let myright = this.props.position[0] + 40;
        let mytop = this.props.position[1];
        let mybottom = this.props.position[1] + 40;
        let otherleft = obstacle.props.style.left;
        let otherright = obstacle.props.style.left + 40;
        let othertop = obstacle.props.style.top;
        let otherbottom = obstacle.props.style.top - 1 + 40;
        let crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    }

    // for (i = 0; i < myObstacles.length; i += 1) {
    //     if (myGamePiece.crashWith(myObstacles[i])) {
    //         myGameArea.stop();
    //         return;
    //     } 

    // loseGame = () => {
    //     if (this.props.position[0] === this.props.obstaclesArr.forEach(obstacle => {obstacle.props.style.top}) && 
    //     this.props.position[1] === this.props.obstaclesArr.forEach(obstacle => {obstacle.props.style.left})){
    //         alert("You lose")
    //         }
    //     }

    render() {
        console.log()
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
            <Row />
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

export default connect(mapStateToProps)(Game);