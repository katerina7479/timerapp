var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
//var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');


describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('formatSeconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock />);
    it('should format seconds', () => {
      expect(clock.formatSeconds(613)).toBe('10:13');
    });
    it('should format seconds', () => {
      expect(clock.formatSeconds(61)).toBe('01:01');
    });
  });
})
