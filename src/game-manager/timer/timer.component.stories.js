import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import Timer from './timer.component';

storiesOf(`${base}/Timer`, module).add('should countdown from interval', () => (
  <Timer intervalDurationInSeconds={600} />
));
