import React from 'react';
import PropTypes from 'prop-types';

/**
 * Calculate and display count down from given interval time.
 * @param {int} currentDurationInSeconds: current time the timer has been active for in seconds
 * @param {int} intervalDurationInSeconds: length of interval in seconds
 */
const TimeDisplay = ({ currentDurationInSeconds, intervalDurationInSeconds }) => {
  const secondsRemaining = intervalDurationInSeconds - currentDurationInSeconds;

  // Append empty string since it's fastest conversion according to https://stackoverflow.com/a/5765401
  // eslint-disable-next-line prefer-template
  const displayInDoubleDigits = number => (number < 10 ? `0${number}` : number + '');
  const getMinutes = timeInSeconds => Math.floor(timeInSeconds / 60);
  const getSeconds = timeInSeconds => timeInSeconds % 60;

  return (
    <div>
      <span>{displayInDoubleDigits(getMinutes(secondsRemaining))}</span>
      <span>:</span>
      <span>{displayInDoubleDigits(getSeconds(secondsRemaining))}</span>
    </div>
  );
};

TimeDisplay.propTypes = {
  currentDurationInSeconds: PropTypes.number.isRequired,
  intervalDurationInSeconds: PropTypes.number.isRequired
};

export default TimeDisplay;
