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
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td> 
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td> 
          </tr>
        </tbody>
      </table>
    );
  }
}

export default View1
