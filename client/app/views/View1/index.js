import React, { Component } from 'react';
import { Link } from 'react-router'

class View1 extends Component {
  constructor() {
    super()
  }
  testLogger() {
    console.log("hello from View1");
  }
  render() {
    return (
      <div onClick={this.testLogger}>View1</div>
    );
  }
}

export default View1
