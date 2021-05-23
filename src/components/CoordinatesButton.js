// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  
  getXY = (e) => {
    let array = []
    array.push(e.clientX)
    array.push(e.clientY)
    this.props.onReceiveCoordinates( array ) 
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