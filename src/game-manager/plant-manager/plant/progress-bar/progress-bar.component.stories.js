import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { useInterval } from 'common/hooks/use-interval.hook';
import ProgressBar from './progress-bar.component';

/**
 * Kind of fun, keeping.
 */
const InfiniteIncrementingProgressBar = () => {
  const max = 100;
  const [progress, setProgress] = useState(0);

  // Increment progress every 1 second
  useInterval(progress, () => setProgress(progress + 10), 1000);

  return (
    <div>
      <ProgressBar currentValue={progress} maxValue={max} />
    </div>
  );
};

const LoopedIncrementingProgressBar = () => {
  const max = 100;
  const [progress, setProgress] = useState(0);

  // Increment progress every 1 second
  useInterval(progress, () => setProgress(progress + 10), 1000);

  useEffect(() => {
    if (progress > max) {
      setProgress(0);
    }
  }, [progress]);

  return (
    <div>
      <ProgressBar currentValue={progress} maxValue={max} />
    </div>
  );
};

storiesOf('Plant Manager/Plant/Progress Bar', module)
  .add('Zero state', () => <ProgressBar currentValue={0} maxValue={100} />)
  .add('Non-zero state', () => <ProgressBar currentValue={75} maxValue={100} />)
  .add('Full state', () => <ProgressBar currentValue={100} maxValue={100} />)
  .add('Final state', () => <ProgressBar currentValue={100} maxValue={100} isFinalState />)
  .add('Infinite incrementing', () => <InfiniteIncrementingProgressBar />)
  .add('Looped incrementing', () => <LoopedIncrementingProgressBar />);
