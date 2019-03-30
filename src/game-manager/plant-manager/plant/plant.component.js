/**
 * Handles displaying plant information and interactions.
 */
import React from "react";
import { plantPropTypes } from "./plant.prop-types";

const Plant = props => {
  const { id, name, progress, currentState } = props;

  return (
    <div
      onClick={() => {
        console.log("prevPlant", props);
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
