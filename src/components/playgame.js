import React from "react";
import { connect } from "react-redux";
import { startGame } from '../actions/index'
import { Button } from 'semantic-ui-react'
import grass_2 from '../images/grass_2.png'

const StartGame = (props) => {
    
    return (
        <div  style= {{backgroundImage: `url(${grass_2})`,
        height: '1000px',
        textAlign:'center'
         }}>
            <div align='center' position='center' style={{
            position: 'center',
            width: '620px',
            padding: '30px',
            border: '2px solid pink',
            backgroundColor: 'white',
            display: 'inline-block',
            margin: '100px'
            }}>
                <h1>Endless Kickoff Return</h1>
                <h2> USE THE ARROW KEYS TO MOVE </h2>
                <h3>LOSE WHEN YOU HIT AN OPPOSING PLAYER</h3>
                <Button inverted color='green' onClick={props.startGame}> Start Game </Button>   
            </div>
       </div>
    );
  };

  
  
  export default connect(null, { startGame })(StartGame);