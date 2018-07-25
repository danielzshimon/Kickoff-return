import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addObstaclesToState } from '../actions/index'



class Obstacles extends Component {
  
    constructor(){
        super()

        this.state = {
            position: 0
        }
    }
    //add obstacles to the array
    generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    createObstacle = () => {
        const obstacle = <div style={{position: 'absolute', 
        top: this.state.position, 
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

    changeTopOfObstacle = () => {
        console.log(this.props.obstaclesArr)
    }
    //     const previousPos = document.getElementById('obstacle').style.top; 
    //     setInterval(() => {
         
    //         previousPos += 10
    //   }, 50)}

 
    
    //when obstacle are out of the game area or get to the bottom of the game area remove them from them from the array
    //top: 600 is out of the area
  
    componentDidMount(){
        this.props.addObstaclesToState(this.createMultipleObstacles(this.generateRandomNumber(1, 20)))
        
    }

    componentDidUpdate(){
    //    if(this.state.position < 1200) {this.setState((prevState) => {
    //    return { position: 100}
    //    }) }
    }

    

    render() {
        
        return (
        <div>
            
            {this.props.obstaclesArr.map((obstacle) => {
                
              return obstacle
            })}
                
        </div>
    );
  }
}



function mapStateToProps(state) {
    return {
        ...state.obstacles,
        ...state.background
    }
}


export default connect(mapStateToProps, { addObstaclesToState })(Obstacles);