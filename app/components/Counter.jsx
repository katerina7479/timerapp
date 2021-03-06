var React = require('react')
var Clock = require('Clock')
var CounterForm = require('CounterForm');
var Controls = require('Controls');


var Counter = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped',
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'paused':
          this.stopTimer(false);
          break
        case 'stopped':
          this.stopTimer(true);
          break
      }
    }
  },
  stopTimer: function (reset) {
    if (reset == true) {
      this.setState({
        count: 0
      })
    }
    clearInterval(this.timer);
    this.timer = undefined
  },
  componentWillUnmount: function () {
    this.stopTimer(false);
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount == 0) {
        this.setState({
          countdownStatus: 'stopped',
        })
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countdownStatus: newStatus,
    })
  },
  render: function () {
    var { count, countdownStatus } = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CounterForm onSetCountdown={this.handleSetCountdown} />
      }
    }
    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Counter;
