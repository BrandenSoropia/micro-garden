import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useInterval } from 'common/hooks/use-interval.hook';
import TimeDisplay from './time-display.component';

const MockTimer = () => {
  const [durationInSeconds, setDurationInSeconds] = useState(0);

  useInterval(durationInSeconds, () => setDurationInSeconds(durationInSeconds + 1), 1000);

  return (
    <div>
      <TimeDisplay currentDurationInSeconds={durationInSeconds} intervalDurationInSeconds={600} />
    </div>
  );
};

storiesOf('Timer/Time Display', module)
  .add('changes over time', () => <MockTimer />)
  .add('with single digit seconds only', () => (
    <TimeDisplay currentDurationInSeconds={51} intervalDurationInSeconds={60} />
  ))
  .add('with double digit seconds only', () => (
    <TimeDisplay currentDurationInSeconds={41} intervalDurationInSeconds={60} />
  ))
  .add('with single digit minutes only', () => (
    <TimeDisplay currentDurationInSeconds={60} intervalDurationInSeconds={180} />
  ))
  .add('with double digit minutes only', () => (
    <TimeDisplay currentDurationInSeconds={600} intervalDurationInSeconds={1200} />
  ))
  .add('with both minutes and seconds', () => (
    <TimeDisplay currentDurationInSeconds={345} intervalDurationInSeconds={1200} />
  ));
