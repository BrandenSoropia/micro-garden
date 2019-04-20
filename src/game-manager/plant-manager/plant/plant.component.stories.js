import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components/macro';
import Plant from './plant.component';
import SpriteMapleMature from './assets/maple-mature.png';

const Container = styled.div`
  height: 100px;
  width: 100px;
`;

storiesOf('Plant Manager/Plant', module).add('with plant details', () => (
  <Container>
    <Plant
      sprite={SpriteMapleMature}
      currentProgress={75}
      thresholdEnd={100}
      alt="test"
      onClick={() => console.log('Hello')}
    />
  </Container>
));
