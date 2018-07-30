import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addObstaclesToState, removeObstaclesFromState } from '../actions/index'
import Player from './player'
import Background from './background'
import Row from './row';

class Game extends Component {
 
    // if player and obstacles hit eac other stop the game 

    //figure out scoring

    createRow = () => {
        return <Row /> 

        
    }

    // createMultipleRows = (times) => {
    //     let arr = []
    //     for(let i = 1; i <= times; i++){
    //         arr.push(i)
    //     }
    //     return arr.map(() => this.createRow());
        
    // }    

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

    componentDidMount(){
        setInterval(() => {this.props.addObstaclesToState([this.createRow()])}, 3000);
        // setTimeout(() => setInterval(() => this.props.removeObstaclesFromState(), 3500), 6000)
    }

     // {setInterval(() => {
    //     const previousPos = this.props.yPosition
    //     this.props.movingBackground(previousPos)}, 50)
     
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
            {this.props.obstaclesRowArr.map((row) => {
                
                return row})}
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

export default connect(mapStateToProps,{addObstaclesToState, removeObstaclesFromState})(Game);