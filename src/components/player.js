import React, { Component } from 'react';
import { connect } from 'react-redux'
// import handleMovement  from '../actions/movement'
import { makeMove } from '../actions/index'

class Player extends Component {
  
    componentDidMount(){
        this.nameDiv.focus();
      }

     getNewPosition = (direction) => {
        const playerSize = 40;
        const prevPosition =  this.props.position//where my issue is I want to grab props
        switch(direction){
            case 'LEFT':
                return [prevPosition[0] - playerSize, prevPosition[1]]
            case 'RIGHT':
                return [prevPosition[0] + playerSize, prevPosition[1]]
            case 'UP':
                return [prevPosition[0], prevPosition[1] - playerSize]
            case 'DOWN':
                return [prevPosition[0], prevPosition[1] + playerSize]
        }
    }

    handleKeyDown = (e) => {
        e.preventDefault()
        console.log('keydown')
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
                background: 'blue',
                width: '40px',
                height: '40px'
                }}
                onKeyDown={this.handleKeyDown}
                tabIndex='0'
                ref={(div) => { this.nameDiv = div; }} 
                />
    );
  }
}



function mapStateToProps(state) {
    return {
        ...state.player
    }
}




export default connect(mapStateToProps, { makeMove })(Player);