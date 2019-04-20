import React from 'react';
import { uniqueId } from 'lodash';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Plant from './plant/plant.component';

const StyledPlant = styled(Plant)`
  height: 100px;
  width: 100px;
`;

const PlantManager = ({ plants, incrementProgress }) => {
  return plants ? (
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
  ) : null;
};

PlantManager.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      progress: PropTypes.number,
      start: PropTypes.number,
      end: PropTypes.number,
      sprite: PropTypes.string,
      alt: PropTypes.alt
    })
  ).isRequired,
  incrementProgress: PropTypes.func.isRequired
};

export default PlantManager;
