import { selectPlantManager, selectPlants } from '../plant-manager.selectors';
import { makeMapleTree } from '../plant/plant.factory';

describe('Plant Manager selectors tests', () => {
  const plants = [makeMapleTree(), makeMapleTree()];

  const state = {
    plantManager: {
      plants
    }
  };

  describe('selectPlantManager tests', () => {
    it('should select plantManager state from app', () => {
      expect(selectPlantManager(state)).toEqual({ plants });
    });
  });

  describe('selectPlants tests', () => {
    it('should select plants from plantManager', () => {
      expect(selectPlants(state)).toEqual(plants);
    });
  });
});
