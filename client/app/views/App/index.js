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
        <h1>Navigation</h1>
        <ul role="nav">
          <li><Link to="/view1">view1</Link></li>
          <li><Link to="/view2">view2</Link></li>
        </ul>

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
}

export default App
