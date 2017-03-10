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
      <table onClick={this.testLogger} id="projects-summary">
      {/*style={width:100%}*/}
        <thead>
          <tr>
            <th>Name</th> 
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bob</td> 
            <td>50</td>
          </tr>
          <tr>
            <td>John</td> 
            <td>94</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default View1
