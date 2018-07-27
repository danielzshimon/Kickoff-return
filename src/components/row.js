import React, { Component } from 'react';
import { connect } from 'react-redux'
import Obstacles from './obstacles'

class Row extends Component {

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
    createRow = () => {
        const row = <div style={{
            position: 'absolute', 
        
        // top: ,
        height: '40px', 
        
        }}
        />

        return row
    }

    createMultipleRows = (times) => {
        let arr = []
        for(let i = 1; i <= times; i++){
            arr.push(i)
        }
        return arr.map(() => this.createRow());
        
    }

    render(){
        return(
            <div style={{
                position: 'absolute',
                top:this.props.yPosition,
                
                
            }}
            >
               <Obstacles /> 
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        
        ...state.background
    }
}

export default connect(mapStateToProps)(Row);