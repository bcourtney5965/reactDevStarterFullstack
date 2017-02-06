import React, { Component } from 'react';
import axios from 'axios';
import Router from 'react-router';
import { render } from 'react-dom';
import { DefaultRoute, Link,  Route, RouteHandler } from 'react-router';
import View1 from './views/View1';

// class View1 extends Component {
//   constructor() {
//     super()
//   }
//   ajaxTest() {
//     console.log('hello');
//     axios.post('/api/test', {"from": "client"})
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   render() {
//     return (
//       <div onClick={this.ajaxTest}> Hello World! </div>
//     );
//   }
// }

render(<View1 />, document.getElementById('app'));