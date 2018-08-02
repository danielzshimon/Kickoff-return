import React from "react";
import { connect } from "react-redux";
import { startGame } from '../actions/index'


const StartGame = (props) => {
    
    return (
        <div className="text-center">
            <h1>Game</h1>
            <p className="lead">
            Arrow keys to move
            </p>
            <p>
                <button
                    onClick={props.startGame}
                    className="btn btn-success btn-lg"
                > Start Game </button>
            </p>    
        </div>
       
    );
  };

  
  
  export default connect(null, { startGame })(StartGame);