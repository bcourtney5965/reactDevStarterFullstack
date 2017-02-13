import React, { Component } from 'react';
import { Link } from 'react-router'

class IndexRoute extends Component {
  constructor() {
    super()
  }
  testLogger() {
    console.log("hello from IndexRoute");
  }
  render() {
    return (
      <div onClick={this.testLogger}>IndexRoute</div>
    );
  }
}

export default IndexRoute
