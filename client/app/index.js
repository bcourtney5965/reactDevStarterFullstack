import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { DefaultRoute, Router, Route, hashHistory, Link, RouteHandler, IndexRoute } from 'react-router';
import App from './views/App';
import View1 from './views/View1';
import View2 from './views/View2';
import Index_Route from './views/IndexRoute';

{/* http://localhost:8080/#/ */}
{/* http://localhost:8080/#/view1 */}
{/* http://localhost:8080/#/view2 */}
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <IndexRoute component={Index_Route}/>
      <Route path="/view1" component={View1}/>
      <Route path="/view2" component={View2}/>
    </Route>
  </Router>
), document.getElementById('app'))
