import { compose, withStateHandlers, lifecycle } from "recompose";
import Timer from "./timer.component";

// Using delta time because it's more accurate than incrementor. Source: https://stackoverflow.com/a/29972322
export const withTimerState = withStateHandlers(
  ({
    startTime = null, // Holds start time which will be used to compare delta time
    intervalId = null, // Reference to setInterval for clearing
    durationInMilliseconds = 3000 // User set time interval durationInMilliseconds
  }) => ({
    startTime,
    intervalId,
    durationInMilliseconds
  }),
  {
    setDurationInMilliseconds: () => durationInMilliseconds => ({
      durationInMilliseconds
    }),
    // Passing in callback to make it more flexible
    startTimer: ({ durationInMilliseconds }) => ({
      startTime,
      onTimerCompleteCallback
    }) => {
      const intervalId = setInterval(() => {
        if (Date.now() - startTime >= durationInMilliseconds) {
          onTimerCompleteCallback();
        }
      }, 100); // 100ms to hopefully lessen time "jumps" due to setInterval stalls.

      return {
        startTime,
        intervalId
      };
    },
    clearTimer: ({ intervalId }) => () => {
      clearInterval(intervalId);

      return {
        startTime: null,
        intervalId: null
      };
    }
  }
);

const withLifecycle = lifecycle({
  // Clear setInterval in case component unmounts before cleared normally (i.e duration complete, timer cancelled etc...)
  componentWillUnmount() {
    this.props.clearTimer();
  }
});

export default compose(
  withTimerState,
  withLifecycle
)(Timer);
