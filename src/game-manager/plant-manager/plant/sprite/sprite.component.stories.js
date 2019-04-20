import React from 'react';
import { storiesOf } from '@storybook/react';
import Sprite from './sprite.component';
import SpriteMapleMature from '../assets/maple-mature.png';

storiesOf('Plant Manager/Plant/Sprite', module)
  .add('Renders with given dimensions and units', () => (
    <Sprite url={SpriteMapleMature} width="150px" height="150px" alt="test" />
  ))
  .add('Renders with default dimensions', () => <Sprite url={SpriteMapleMature} alt="test" />)
  .add('Renders with url', () => (
    <Sprite
      url="http://www.soidergi.com/wp-content/uploads/pn/png-tree-autumn-cartoon-clip-art-tree-vector.jpg"
      height="100%"
      width="100%"
      alt="test"
    />
  ));
