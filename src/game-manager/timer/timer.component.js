import React, { useState } from 'react';
import { useInterval } from 'common/hooks/use-interval.hook';
import PropTypes from 'prop-types';
import TimeDisplay from './time-display/time-display.component';

const Timer = ({ intervalDurationInSeconds }) => {
  const [durationInSeconds, setDurationInSeconds] = useState(0);
  useInterval(durationInSeconds, () => setDurationInSeconds(durationInSeconds + 1), 1000);

  return (
    <div>
      <TimeDisplay
        currentDurationInSeconds={durationInSeconds}
        intervalDurationInSeconds={intervalDurationInSeconds}
      />
    </div>
  );
};

Timer.propTypes = {
  intervalDurationInSeconds: PropTypes.number.isRequired
};

export default Timer;
