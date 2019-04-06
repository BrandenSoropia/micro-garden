import React from 'react';
import PropTypes from 'prop-types';
import {
  MINIMUM_DURATION_LIMIT_MINUTES,
  MAXIMUM_DURATION_LIMIT_MINUTES
} from './duration-presets.constants';

/**
 * Convert milliseconds to minutes including up to 2 decimal places.
 */
const millisecondsToMinutes = milliseconds => Math.round((milliseconds * 100) / 60000) / 100;

/**
 * Convert milliseconds to minutes including up to 2 decimal places.
 */
const minutesToMilliseconds = minutes => minutes * 60000;

const Timer = ({ startTimer, durationInMilliseconds, clearTimer, setDurationInMilliseconds }) => (
  <div>
    <p>{`Duration: ${millisecondsToMinutes(durationInMilliseconds)} mins`}</p>
    <label htmlFor="duration-in-minutes">Duration:</label>
    <input
      id="duration-in-minutes"
      type="number"
      min={MINIMUM_DURATION_LIMIT_MINUTES}
      max={MAXIMUM_DURATION_LIMIT_MINUTES}
      onChange={e => {
        e.preventDefault();
        e.stopPropagation();

        setDurationInMilliseconds(minutesToMilliseconds(parseInt(e.target.value)));
      }}
    />
    <button
      onClick={() =>
        startTimer({
          startTime: Date.now(),
          onTimerCompleteCallback: clearTimer
        })
      }
    >
      Start
    </button>
  </div>
);

Timer.propTypes = {
  startTimer: PropTypes.func.isRequired,
  durationInMilliseconds: PropTypes.number.isRequired
};

export default Timer;
