import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { uniqueId } from 'lodash';
import Plant from './plant/plant.component';
import { selectPlants } from './plant-manager.selectors';
import { incrementProgress as _incrementProgress } from './plant-manager.action-creators';

const PlantManager = ({ plants, incrementProgress }) => {
  return (
    <>
      {plants &&
        plants.map(plant => (
          <Plant key={uniqueId('plant-')} {...plant} incrementProgress={incrementProgress} />
        ))}
      <button
        type="button"
        onClick={() =>
          incrementProgress({
            amount: 1
          })
        }
      >
        Increment All
      </button>
    </>
  );
};

export default connect(
  createStructuredSelector({
    plants: selectPlants
  }),
  {
    incrementProgress: _incrementProgress
  }
)(PlantManager);
