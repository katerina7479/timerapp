var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Counter = require('Counter');


//Load css
$(document).foundation();
require('style!css!sass!applicationStyle')


// Call it
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer} />
      <Route path='counter' component={Counter} />
    </Route>
  </Router>,
  document.getElementById('app')
);
