import React from "react";
import { connect } from "react-redux";



const Score = (props) => {
    
    return (
        <h3> Score: {props.yPosition} </h3>
       
    );
  };

  function mapStateToProps(state) {
    return {
        ...state.background
    }
}
  
  export default connect(mapStateToProps)(Score);