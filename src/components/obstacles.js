import React, { Component } from 'react';
import { connect } from 'react-redux'
import { gameStatus, lostGame } from '../actions/index'
import obstacleSprite from '../images/obstaclesprite.png'


class Obstacles extends Component {
  
   
    generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    createObstacle = () => {
        const obstacle = <div  
        style={{position: 'absolute', 
        left: this.generateRandomNumber(0, 1160), 
        backgroundImage: `url(${obstacleSprite})`, 
        width: '39px', 
        height: '39px', 
        border: '1px solid white',
        transitionTimingFunction: 'ease-in-out'
        }}
        />

        return obstacle
    }


    createMultipleObstacles = (times) => {
        let arr = []
        for(let i = 1; i <= times; i++){
            arr.push(i)
        }
        return arr.map(() => this.createObstacle());
        
    }


    crashWith = () => {
        let myleft = this.props.position[0];
        let myright = this.props.position[0] + 39;
        let mytop = this.props.position[1];
        let mybottom = this.props.position[1] + 64;
        let otherleft = this.props.xPosition;
        let otherright = this.props.xPosition + 52;
        let othertop = this.props.yPosition;
        let otherbottom = this.props.yPosition + 63;
        let crash = false;
        if ((mybottom >= othertop ) &&
               (mytop <= otherbottom) &&
               (myright >= otherleft) &&
               (myleft <= otherright)) {
           crash = true;
        }

        if(crash === true){
            
            this.props.lostGame()
        }
    }

    componentDidUpdate(){
       this.crashWith()
    }
    

    render() {
        return (
            <div  
            style={{position: 'absolute', 
            left: this.props.xPosition, 
            backgroundImage: `url(${obstacleSprite})`, 
            backgroundPosition: '-7px -2px',
            width: '53px', 
            height: '66px'
            }}
            />
    );
  }
}

function mapStateToProps(state) {
    return {
        
        ...state.player
    }
}




export default connect(mapStateToProps, { gameStatus, lostGame })(Obstacles);