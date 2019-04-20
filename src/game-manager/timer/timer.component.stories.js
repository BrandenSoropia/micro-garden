import React from 'react';
import { storiesOf } from '@storybook/react';
import Timer from './timer.component';

storiesOf('Timer', module).add('should countdown from interval', () => (
  <Timer intervalDurationInSeconds={600} />
));
