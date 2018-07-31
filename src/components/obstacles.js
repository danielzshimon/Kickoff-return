import React, { Component } from 'react';
import { connect } from 'react-redux'
import { gameStatus } from '../actions/index'



class Obstacles extends Component {
  
    // constructor(){
    //     super()

    //     this.state = {
    //         position: 0
    //     }
    // }
    //add obstacles to the array
    generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    createObstacle = () => {
        const obstacle = <div  
        style={{position: 'absolute', 
        left: this.generateRandomNumber(0, 1160), 
        background: 'red', 
        width: '39px', 
        height: '39px', 
        border: '1px solid white'
        }}
        />

        return obstacle
    }

    // <div style={{position: 'absolute', top: 0, left: this.generateRandomNumber(0, 1160), background: 'red', width: '40px', height: '40px'}}/>
    // <div style={{
    //     position: 'absolute', 
    //     top: 0,
    //     left: this.generateRandomNumber(0, 1160), 
    //     background: 'red', 
    //     width: '40px', 
    //     height: '40px'
    // }}
    // />


    createMultipleObstacles = (times) => {
        let arr = []
        for(let i = 1; i <= times; i++){
            arr.push(i)
        }
        return arr.map(() => this.createObstacle());
        
    }

    // changeTopOfObstacle = () => {
    //     setInterval(() => {
    //         const previousPos = this.props.obstacleTop
    //         this.props.moveObstacles(previousPos)}, 50)
    // }
    //     const previousPos = document.getElementById('obstacle').style.top; 
    //     setInterval(() => {
         
    //         previousPos += 10
    //   }, 50)}
    // changeY = () => {
    //     setInterval(() => {
    //       const previousPos = this.props.yPosition
    //       this.props.movingBackground(previousPos)}, 50)
    //   }
 
    
    //when obstacle are out of the game area or get to the bottom of the game area remove them from them from the array
    //top: 600 is out of the area
  
    componentDidMount(){
        // this.createMultipleObstacles(this.generateRandomNumber(1, 20))
    }

    componentDidUpdate(){
    }

    crashWith = () => {
        let myleft = this.props.position[0];
        let myright = this.props.position[0] + 39;
        let mytop = this.props.position[1];
        let mybottom = this.props.position[1] + 39;
        let otherleft = this.props.xPosition;
        let otherright = this.props.xPosition + 39;
        let othertop = this.props.yPosition;
        let otherbottom = this.props.yPosition + 39;
        let crash = true;
        if ((mybottom >= othertop ) &&
               (mytop <= otherbottom) &&
               (myright >= otherleft) &&
               (myleft <= otherright)) {
           crash = false;
        }

        if(crash === false){
            this.props.gameStatus()
            console.log('playerleft:', myleft,'obstacleft', otherleft, 'playerright', myright, 'obstacright', otherright,'mytop', mytop,'obstactop', othertop,'mybottom', mybottom,'obstacbottom', otherbottom)
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
            background: 'red', 
            width: '39px', 
            height: '39px', 
            border: '1px solid white'
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




export default connect(mapStateToProps, { gameStatus })(Obstacles);