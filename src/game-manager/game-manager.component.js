import React from "react";
import Plant from "./plant/plant.component";
import { uniqueId } from "lodash";

const GameManager = ({ plants }) => (
  <div>
    {plants.map(plant => (
      <Plant
        key={uniqueId("plant-")}
        name={plant.getName()}
        status={plant.getCurrentStatus()}
        sprite={plant.getCurrentSprite()}
        alt={plant.getCurrentSpriteAlt()}
      />
    ))}
  </div>
);

export default GameManager;
