var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Counter = require('Counter');


describe('Counter', () => {
  it('should exist', () => {
    expect(Counter).toExist();
  });
  describe('handleSetCountdown', () => {
    it('should set state to started and start countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(
        <Counter />
      );
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });
  });

})
