import React, { Component } from 'react';
import { connect } from "react-redux";
import { startGame, resetGameStatus, resetGamePlayer, resetGameObstacles, stopBackground} from '../actions/index'


class GameOver extends Component{
    
    resetGame = () => {
        this.props.resetGameStatus();
        this.props.resetGamePlayer();
        this.props.resetGameObstacles();
        
    }

    componentDidMount(){
        this.resetGame()
    }

    componentWillUnmount(){
        this.props.stopBackground();
    }

    render(){
        return (
            
        <div className="text-center">
            <h1>You Lose</h1>
            <h2> {`Final Score ${this.props.yPosition}`}</h2>
            <p className="lead"></p>
            <p>
                <button
                onClick={this.props.startGame}
                className="btn btn-success btn-lg"
                    >Start Another Game </button>
                </p>
        </div>
    
    )}
  };

function mapStateToProps(state) {
    return {
        ...state.game,
        ...state.background
    }
}
  
  export default connect(mapStateToProps, { startGame, resetGameStatus, resetGamePlayer, resetGameObstacles, stopBackground })(GameOver);






        