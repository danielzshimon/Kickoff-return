import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addObstaclesToState } from '../actions/index'
import Obstacles from './obstacles'


class Row extends Component {

    constructor(){
        super()

        this.state = {
            obstacles: [],
            yIndex: 0
        }
    }
    //where to store the obstacles
    //have rows dictate when the obstacles are created 
    //create a lot of rows and have them move based on an amount of time
    //create the rows in the beginning of the game 
    //have the row be the thing the moves 
    //have the row move 
    //have the row go away after an amount of time and then add it to the back at the end
    //it'll be an array of arrays
    //all we need to change is the y of this component same way the background work
    //what will state have?
    //hope for the best
   
    generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    createObstacle = () => {
        return {xPosition: this.generateRandomNumber(0, 1160)}
        }

    createMultipleObstacles = (times) => {
        let arr = []
        for(let i = 1; i <= times; i++){
            arr.push(i)
        }
        return arr.map(() => this.createObstacle());
        
    }
    

    componentDidMount(){
        this.setState({obstacles: this.createMultipleObstacles(this.generateRandomNumber(1, 12))});
        setInterval(() => {this.setState({
            yIndex: this.state.yIndex + 7
        })}, 50)
    }

    
    render(){ 
        
        return(
            <div style={{
                position: 'absolute',
                top: this.state.yIndex, 
                height: '40px',
                
            }}
            >
           {this.state.obstacles.map( obstacle => {return <Obstacles xPosition={obstacle.xPosition} yPosition={this.state.yIndex}/>})}
           

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        
        ...state.player
    }
}

export default connect(mapStateToProps, { addObstaclesToState })(Row);