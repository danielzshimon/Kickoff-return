import React, { Component } from 'react';
import { connect } from 'react-redux'
import { makeMove } from '../actions/index'
import football  from '../images/football.png'

class Player extends Component {
  
    componentDidMount(){
        this.nameDiv.focus();
    }

    componentDidUpdate(){
        this.nameDiv.focus();
        
    }

    boundaries(prevPosition, newPosition){
         if ((newPosition[0] >= 0 && newPosition[0] <= 1169) &&
               (newPosition[1] >= 0 && newPosition[1] <= 530)){
               return newPosition 
        } else {
        return prevPosition
        }
    }

     getNewPosition = (direction) => {
        
        const prevPosition =  this.props.position
        switch(direction){
            case 'LEFT':
                return this.boundaries(prevPosition,[prevPosition[0] - 10, prevPosition[1]])
            case 'RIGHT':
                return this.boundaries(prevPosition,[prevPosition[0] + 10, prevPosition[1]])
            case 'UP':
                return this.boundaries(prevPosition,[prevPosition[0], prevPosition[1] - 10])
            case 'DOWN':
                return this.boundaries(prevPosition,[prevPosition[0], prevPosition[1] + 10])
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

    
  
    render() {
        return (
            <div style={{
                position: 'absolute',
                top: this.props.position[1],
                left: this.props.position[0],
                backgroundImage: `url(${football})`,
                width: '40px',
                height: '65px',
                outline: 'none',
                backgroundSize: '100%'
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