import React, { Component } from 'react';
import { connect } from 'react-redux'


class Player extends Component {
  render() {
    return (
        <div style={{
            position: 'absolute',
            top: this.props.position[1],
            left: this.props.position[0],
            background: 'blue',
            width: '40px',
            height: '40px'
            
        }}/>
    );
  }
}

function mapStateToProps(state) {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(Player);