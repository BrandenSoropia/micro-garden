import React from 'react';
import { uniqueId } from 'lodash';
import Plant from './plant/plant.component';

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

export default PlantManager;
