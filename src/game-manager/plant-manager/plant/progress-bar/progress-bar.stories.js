import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgressBar from './progress-bar.component';

storiesOf('ProgressBar', module)
  .add('Zero state', () => <ProgressBar currentValue={0} maxValue={100} />)
  .add('Non-zero state', () => <ProgressBar currentValue={75} maxValue={100} />)
  .add('Full state', () => <ProgressBar currentValue={100} maxValue={100} />);
