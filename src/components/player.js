import React, { Component } from 'react';
import { connect } from 'react-redux'
// import handleMovement  from '../actions/movement'
import { makeMove } from '../actions/index'

class Player extends Component {
  
    componentDidMount(){
        this.nameDiv.focus();
    }

    componentDidUpdate(){
        this.nameDiv.focus();
        
    }

    boundaries(prevPosition, newPosition){
         if ((newPosition[0] >= 0 && newPosition[0] <= 1160) &&
               (newPosition[1] >= 0 && newPosition[1] <= 560)){
               return newPosition 
        } else {
        return prevPosition
        }
    }

     getNewPosition = (direction) => {
        // const playerSize = 40;
        const prevPosition =  this.props.position//where my issue is I want to grab props
        switch(direction){
            case 'LEFT':
                return this.boundaries(prevPosition,[prevPosition[0] - 9, prevPosition[1]])
            case 'RIGHT':
                return this.boundaries(prevPosition,[prevPosition[0] + 9, prevPosition[1]])
            case 'UP':
                return this.boundaries(prevPosition,[prevPosition[0], prevPosition[1] - 9])
            case 'DOWN':
                return this.boundaries(prevPosition,[prevPosition[0], prevPosition[1] + 9])
            default:
                console.log('default')
        }
    }

    handleKeyDown = (e) => {
        e.preventDefault()
        switch(e.keyCode){
            case 37:  //left arrow
                return this.props.makeMove(this.getNewPosition('LEFT'))

            case 38:  //up arrow
                return this.props.makeMove(this.getNewPosition('UP'))

            case 39:  //right arrow
                return this.props.makeMove(this.getNewPosition('RIGHT'))

            case 40:  //down arrow
                return this.props.makeMove(this.getNewPosition('DOWN'))

            default:
                console.log(e.keyCode)
        
        }
    }

    //creat lose situation where if player = same spot as obsticle board stope and player cant move anymore
  
    render() {
        return (
            <div style={{
                position: 'absolute',
                top: this.props.position[1],
                left: this.props.position[0],
                background: 'blue',
                width: '39px',
                height: '39px',
                border: '1px solid white',
                outline: 'none',
                
                }}
                onKeyDown={this.handleKeyDown}
                tabIndex='0'
                ref={(div) => { this.nameDiv = div}} 
                />
    );
  }
}



function mapStateToProps(state) {
    return {
        ...state.player,
        ...state.background
    }
}




export default connect(mapStateToProps, { makeMove })(Player);