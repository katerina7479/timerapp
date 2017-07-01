var React = require('react');


var CounterForm = React.createClass({
  onSubmit: function (event) {
    event.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" className="counter-form" onSubmit={this.onSubmit}>
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
});

module.exports = CounterForm;
