/**
 * Handles displaying plant information and interactions.
 */
import React from "react";
import { plantPropTypes } from "./plant.prop-types";

const Plant = props => {
  const { plant, onClick } = props;
  const { status, sprite, alt } = plant.getCurrentState();
  const { name } = plant;

  return (
    <div onClick={() => onClick(name)}>
      <p>{`${name} (${status})`}</p>
      <img src={sprite} alt={alt} />
    </div>
  );
};

Plant.propTypes = plantPropTypes.isRequired;

export default Plant;
