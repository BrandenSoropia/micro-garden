import React from "react";
import { Plant } from "../plant/plant.component";
import { TREE } from "../common/plant-types.constants";

const GameManager = () => (
  <div>
    <Plant type={TREE} progress={3} />
  </div>
);

export default GameManager;
