// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  
  getXY(e) {
    this.props.onReceiveCoordinates( e.clientX, e.clientY)
    const { x, y } = this.state;
    this.setState({ x: e.clientX, y: e.clientY })
    console.log(e.clientX)
    console.log(x)
    console.log(e.clientY)
    console.log(y)
  }

  
  
  render() {
    return(
      <div>
        <button 
          onClick={this.getXY}
          >

        </button>
      </div>
    );
  }
}

export default CoordinatesButton;


//()