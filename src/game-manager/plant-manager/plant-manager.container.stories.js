import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storiesOf } from '@storybook/react';
import PlantManager from './plant-manager.container';
import rootReducer from '../../reducers';
import { makeMapleTree } from './plant/plant.factory';

const singlePlantStore = createStore(
  rootReducer,
  {
    plantManager: {
      plants: [makeMapleTree()]
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const multiplePlantStore = createStore(
  rootReducer,
  {
    plantManager: {
      plants: [makeMapleTree(), makeMapleTree(), makeMapleTree()]
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

storiesOf('Plant Manager', module)
  .add('with a single plant', () => (
    <Provider store={singlePlantStore}>
      <PlantManager />
    </Provider>
  ))
  .add('with multiple plants', () => (
    <Provider store={multiplePlantStore}>
      <PlantManager />
    </Provider>
  ));
