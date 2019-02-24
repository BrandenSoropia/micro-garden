import React from "react";
import PropTypes from "prop-types";

/**
 * Convert milliseconds to minutes including up to 2 decimal places.
 */
const millisecondsToMinutes = milliseconds =>
  Math.round((milliseconds * 100) / 60000) / 100;

const Timer = ({ startTimer, durationInMilliseconds }) => (
  <div>
    <p>{`Duration: ${millisecondsToMinutes(durationInMilliseconds)} mins`}</p>
    <button onClick={startTimer}>Start</button>
  </div>
);

Timer.propTypes = {
  startTimer: PropTypes.func.isRequired,
  durationInMilliseconds: PropTypes.number.isRequired
};

export default Timer;
