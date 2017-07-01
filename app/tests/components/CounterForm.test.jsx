var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var CounterForm = require('CounterForm');


describe('CounterForm', () => {
  it('should exist', () => {
    expect(CounterForm).toExist();
  });

  describe('functions', () => {
    it('should call onSetCountdown if valid number', () => {
      var spy = expect.createSpy();
      var counterform = TestUtils.renderIntoDocument(
        <CounterForm onSetCountdown={spy}/>
      );
      var $el = $(ReactDOM.findDOMNode(counterform));
      counterform.refs.seconds.value = '128';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalledWith(128);
    });
    it('should not call onSetCountdown if invalid number', () => {
      var spy = expect.createSpy();
      var counterform = TestUtils.renderIntoDocument(
        <CounterForm onSetCountdown={spy}/>
      );
      var $el = $(ReactDOM.findDOMNode(counterform));
      counterform.refs.seconds.value = 'abc';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
    });
  });
})
