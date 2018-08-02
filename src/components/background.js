import React, { Component } from 'react';
import { connect } from 'react-redux'
import { movingBackground } from '../actions/index'
import grass_2 from '../images/grass_2.png'
// import footballfield from '../images/footballfield.png'

class Background extends Component {
 
  changeY = () => {
    
      this.backgroundInterval = setInterval(() => {
      const previousPos = this.props.yPosition
      this.props.movingBackground(previousPos)}, 50)
    
  }


  componentDidMount(){
    this.changeY()
  }

  componentWillUnmount(){
    clearInterval(this.backgroundInterval)
  }


  
  render() {
    
    return (
        <div style={{
            
            position: 'relative',
            top: '0px',
            left: '0px',
            width: '1200px',
            height: '1100px',
            backgroundImage: `url(${grass_2})`,
            maxHeight: '100%',
            backgroundPositionY: this.props.yPosition             
        }}/>
    );
  }
}

function mapStateToProps(state) {
 
  return {
      ...state.background,
      ...state.game
  }
}


export default connect(mapStateToProps, { movingBackground })(Background);