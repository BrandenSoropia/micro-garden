import React from "react";
import { TREE } from "../common/plant-types.constants";
import { Plant as PlantClass } from "./plant.classes";

interface IProps {
  type: string;
  progress: number;
}

export const Plant = ({ plant }: { plant: PlantClass }) => (
  <div>
    <p>{`Name: ${plant.name}`}</p>
    <p>{`Progress: ${plant.progress}`}</p>
    <img src={plant.getSprite()} />
  </div>
);
