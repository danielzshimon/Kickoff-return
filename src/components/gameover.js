import React, { Component } from 'react';
import { connect } from "react-redux";
import { startGame, resetGameStatus, resetGamePlayer, resetGameObstacles, stopBackground} from '../actions/index'
import { Button } from 'semantic-ui-react'


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
            
        <div align='center'  >
            <h1>Game Over!</h1>
            <h2> {`Final Score ${this.props.yPosition}`}</h2>
            
            <p>
                <Button
                inverted color='purple'
                onClick={this.props.startGame}
                    >Try and beat your score? </Button>
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






        