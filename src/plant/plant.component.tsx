import React from "react";
import { TREE } from "../common/plant-types.constants";
import { Maple as MapleTree } from "./trees.classes";

interface IProps {
  type: string;
  progress: number;
}

export const generateSprite = (
  type: string,
  progress: number,
  thresholds: number[]
) => {
  if (type === TREE) {
    MapleTree.thresholds.forEach((threshold: number) => {
      if (progress > threshold) {
      }
    });
  }
};

interface IGeneratePlant {
  type: string;
  progress: number;
}
export const generatePlant = ({ type, progress }: IGeneratePlant) => {
  switch (type) {
    case TREE:
      return (
        <div>
          <p>{`Name: ${MapleTree.name}`}</p>
          <p>{`Progress: ${progress}`}</p>
          <img src={MapleTree.getSprite(progress)} />
        </div>
      );
  }
};

export const Plant = ({ type, progress }: IProps) => (
  <div>{generatePlant({ type, progress })}</div>
);
