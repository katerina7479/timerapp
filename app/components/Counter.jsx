var React = require('react')
var Clock = require('Clock')
var CounterForm = require('CounterForm');


var Counter = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
    };
  },

  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds
    })
  },

  render: function () {
    var { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CounterForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Counter;
