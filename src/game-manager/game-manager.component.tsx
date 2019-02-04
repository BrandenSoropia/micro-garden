import React from "react";
import { Plant } from "../plant/plant.component";
import { Maple as _MapleTree } from "../plant/plant.classes";

const GameManager = () => {
  const MapleTreeSeed = new _MapleTree();

  const MapleTreeSprout = new _MapleTree();
  MapleTreeSprout.updateProgress(3);
  return (
    <div>
      <Plant plant={MapleTreeSeed} />
      <Plant plant={MapleTreeSprout} />
    </div>
  );
};

export default GameManager;
