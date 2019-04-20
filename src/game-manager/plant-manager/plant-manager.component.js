import React from 'react';
import { uniqueId } from 'lodash';
import styled from 'styled-components/macro';
import Plant from './plant/plant.component';

const StyledPlant = styled(Plant)`
  height: 100px;
  width: 100px;
`;

const PlantManager = ({ plants, incrementProgress }) => {
  return (
    <>
      {plants &&
        plants.map(plant => (
          <StyledPlant
            key={uniqueId('plant-')}
            {...plant}
            onClick={() => incrementProgress({ plantId: plant.id, amount: 1 })}
          />
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
