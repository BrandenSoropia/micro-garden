import React from 'react';
import { compose, toClass } from 'recompose';
import { shallow } from 'enzyme';
import { withTimerState } from '../timer.container';

const MockComponent = props => <div {...props} />;

describe('Timer container tests', () => {
  // Doing this allows the internal usage counter for all timers: https://jestjs.io/docs/en/timer-mocks.html
  beforeEach(() => {
    jest.useFakeTimers();
  });

  describe('withTimerState tests', () => {
    it('should save current time and intervalId when startTimer() is called', () => {
      const MockComponentClass = toClass(MockComponent);
      const ComposedComponent = compose(withTimerState)(MockComponentClass);

      const wrapper = shallow(<ComposedComponent />);
      const currentTime = Date.now();
      wrapper
        .find(MockComponentClass)
        .props()
        .startTimer({ startTime: currentTime });
      const { startTime, intervalId } = wrapper.find(MockComponentClass).props();

      expect({ startTime, intervalId }).toEqual({
        startTime: currentTime,
        intervalId: 1
      });
    });
  });
});
