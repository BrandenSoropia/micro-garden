import React from 'react';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import SpriteMapleMature from 'common/assets/maple-mature.png';
import Plot from './plot.component';
import Plant from '../../plant-manager/plant/plant.component';

storiesOf(`${base}/Plot`, module)
  .add('Renders soil plot when not given children', () => (
    <Plot onEvent={() => console.log('Clicked!')} />
  ))
  .add('renders given plant', () => (
    <Plot onEvent={() => console.log('Plot clicked!')}>
      <Plant
        sprite={SpriteMapleMature}
        progress={3}
        alt="test"
        onEvent={() => console.log('Plant clicked!')}
      />
    </Plot>
  ));
