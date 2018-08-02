import React from "react";
import { connect } from "react-redux";
import { startGame } from '../actions/index'
import { Button } from 'semantic-ui-react'

const StartGame = (props) => {
    
    return (
        <div align='center'>
            <h1>Endless Kickoff Return</h1>
            <h2> USE THE ARROW KEYS TO MOVE </h2>
            <h2>LOSE WHEN YOU HIT AN OPPOSING PLAYER</h2>
            <Button inverted color='green' onClick={props.startGame}> Start Game </Button>   
            
       </div>
    );
  };

  
  
  export default connect(null, { startGame })(StartGame);