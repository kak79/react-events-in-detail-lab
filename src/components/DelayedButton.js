// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  onClickHandler = e => {
    e.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(e)
    },  this.props.delay);
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