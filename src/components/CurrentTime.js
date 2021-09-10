import React, { Component } from 'react';
import { render } from 'react-dom';

class CurrentTime extends Component {
  constructor() {
    super();
    this.state = {
      currentDateTime: Date().toLocaleString(),
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.currentDateTime}</h3>
      </div>
    );
  }
}
export default CurrentTime;
