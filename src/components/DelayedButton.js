// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  onClickHandler = (e) => {
    const target = e.target
    
    window.setTimeout = () => {

      this.props.onDelayedClick = () => {
        this.props.delay 

      }
    }
  }

  render() {
    return(
      <div>
        <button 
          onClick={this.onClickHandler}
        >
        Delayed
        </button>
      </div>
    );
  }
}

export default DelayedButton;