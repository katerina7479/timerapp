var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navigation = (props) => {
  return (
    <div className="top-bar dark">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><IndexLink to="/" activeClassName="active-nav-link">Timer</IndexLink></li>
          <li><Link to="/counter" activeClassName="active-nav-link">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Created by <a href="https://github.com/katerina7479" target="_blank">Katerina Hanson</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
