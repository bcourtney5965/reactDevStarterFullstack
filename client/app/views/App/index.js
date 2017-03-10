import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
  constructor() {
    super()
  }
  testLogger() {
    console.log("hello from App");
  }
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/view1">view1</Link></li>
          <li><Link to="/view2">view2</Link></li>
        </ul>
        <div id="container">

          {/* add this */}
          {this.props.children}

        </div>
      </div>
    )
  }
}

export default App
