import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Plant from "./plant/plant.component";
import { selectPlants } from "./plant-manager.selectors";
import { uniqueId } from "lodash";
import { incrementProgress } from "./plant-manager.action-creators";

const PlantManager = ({ plants }) => {
  return (
    plants &&
    plants.map(plant => (
      <Plant
        key={uniqueId("plant-")}
        {...plant}
        incrementProgress={incrementProgress}
      />
    ))
  );
};

export default connect(
  createStructuredSelector({
    plants: selectPlants
  }),
  {
    incrementProgress
  }
)(PlantManager);
