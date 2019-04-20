import React, { useState } from 'react';
import { useInterval } from 'common/hooks/use-interval.hook';

const Timer = () => {
  const [durationInSeconds, setDurationInSeconds] = useState(0);
  useInterval(durationInSeconds, () => setDurationInSeconds(durationInSeconds + 1), 1000);

  return (
    <div>
      <p>{durationInSeconds}</p>
    </div>
  );
};

export default Timer;
