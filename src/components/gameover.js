import React, { Component } from 'react';
import { connect } from "react-redux";
import { startGame, resetGameStatus, resetGamePlayer, resetGameObstacles, stopBackground} from '../actions/index'
import { Button } from 'semantic-ui-react'
import grass_2 from '../images/grass_2.png'


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
            
            <div  style= {{backgroundImage: `url(${grass_2})`,
            height: '810px',
            textAlign:'center'
             }}>
                <div align='center' position='center' style={{
                position: 'center',
                width: '620px',
                padding: '30px',
                border: '2px solid pink',
                boxShadow: '10px 5px 5px red',
                backgroundColor: 'white',
                display: 'inline-block',
                margin: '100px'
                }}>
            <h1>Game Over!</h1>
            <h2> {`Final Score ${this.props.yPosition}`}</h2>
            
            <p>
                <Button
                inverted color='purple'
                onClick={this.props.startGame}
                    >Try and beat your score? </Button>
                </p>
            </div>
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






        