import React, { Component } from 'react';
import { connect } from 'react-redux'


class Background extends Component {
  render() {
    return (
        <div style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            width: '1000px',
            height: '500px',
            backgroundColor: 'black',
            
        }}/>
    );
  }
}


export default Background;