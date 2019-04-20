import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storiesOf } from '@storybook/react';
import PlantManager from './plant-manager.container';
import rootReducer from '../../reducers';
import { makeMapleTree } from './plant/plant.factory';

const store = createStore(
  rootReducer,
  {
    plantManager: {
      plants: [makeMapleTree()]
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

storiesOf('Plant Manager', module).add('with plants', () => (
  <Provider store={store}>
    <PlantManager />
  </Provider>
));
