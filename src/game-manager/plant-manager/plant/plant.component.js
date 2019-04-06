/**
 * Handles displaying plant information and interactions.
 */
import React from 'react';
import { plantPropTypes } from './plant.prop-types';

const Plant = ({ id, name, progress, currentState, incrementProgress }) => {
  return (
    <div
      onClick={() => {
        console.log('clicked!');
        incrementProgress({
          plantId: id,
          amount: 1
        });
      }}
    >
      <p>{`${name} #${id}`}</p>
      <p>{`Progress: ${progress}`}</p>
      <img src={currentState.sprite} alt={currentState.alt} />
    </div>
  );
};

Plant.propTypes = plantPropTypes.isRequired;

export default Plant;
