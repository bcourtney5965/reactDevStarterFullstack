import React, { Component } from 'react';
import { Link } from 'react-router'

class View2 extends Component {
  constructor() {
    super()
  }
  testLogger() {
    console.log("hello from View2");
  }
  render() {
    return (
      <div onClick={this.testLogger}>View2</div>
    );
  }
}

export default View2
