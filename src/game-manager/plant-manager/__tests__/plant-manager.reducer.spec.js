import { progressPlant, applyProgressUpdate, plantManagerReducer } from '../plant-manager.reducer';
import {
  makeMapleTree,
  mapleSeedState,
  mapleSproutState,
  mapleSaplingState,
  mapleMatureState
} from '../plant/plant.factory';
import { INCREMENT_PROGRESS } from '../plant-manager.action-types';

describe('Plant manager tests', () => {
  describe('progressPlant tests', () => {
    it('should return plant with updated progress and current state when not at max state', () => {
      const plant = makeMapleTree({ id: 'plant1' });
      expect(progressPlant(plant, 1)).toEqual({
        id: 'plant1',
        name: 'Maple Tree',
        thresholds: [mapleSeedState, mapleSproutState, mapleSaplingState, mapleMatureState],
        type: 'TREE',
        progress: 1,
        currentState: mapleSproutState
      });
    });

    it('should return unmodified plant when at max state', () => {
      const plant = makeMapleTree({ id: 'plant1', progress: mapleMatureState.start });
      expect(progressPlant(plant, 1)).toEqual({
        id: 'plant1',
        name: 'Maple Tree',
        thresholds: [mapleSeedState, mapleSproutState, mapleSaplingState, mapleMatureState],
        type: 'TREE',
        progress: 3,
        currentState: mapleMatureState
      });
    });
  });

  describe('applyProgressUpdate tests', () => {
    it('should update the first plant when given its id', () => {
      const targetPlantId = 'plant1';
      const targetPlant = makeMapleTree({ id: targetPlantId });
      const plant2 = makeMapleTree({ id: 'plant2', progress: mapleMatureState.start });
      const plant3 = makeMapleTree({ id: 'plant3', progress: mapleSproutState.start });
      const plants = [targetPlant, plant2, plant3];

      expect(applyProgressUpdate(plants, { plantId: targetPlantId, amount: 1 })).toEqual([
        {
          ...targetPlant,
          progress: 1,
          currentState: mapleSproutState
        },
        plant2,
        plant3
      ]);
    });

    it('should update all plants when not given a plantId', () => {
      const plant1 = makeMapleTree({ id: 'plant1' });
      const plant2 = makeMapleTree({ id: 'plant2', progress: mapleMatureState.start });
      const plant3 = makeMapleTree({ id: 'plant3', progress: mapleSproutState.start });
      const plants = [plant1, plant2, plant3];

      expect(applyProgressUpdate(plants, { amount: 1 })).toEqual([
        {
          ...plant1,
          progress: 1,
          currentState: mapleSproutState
        },
        plant2, // Since mature state, does not update
        { ...plant3, progress: mapleSaplingState.start, currentState: mapleSaplingState }
      ]);
    });
  });

  describe('plantManagerReducer tests', () => {
    it('should update singe plant when INCREMENT_PROGRESS is given with a plant id', () => {
      const targetPlantId = 'plant1';
      const targetPlant = makeMapleTree({ id: targetPlantId });
      const plant2 = makeMapleTree({ id: 'plant2', progress: mapleMatureState.start });
      const plant3 = makeMapleTree({ id: 'plant3', progress: mapleSproutState.start });
      const plants = [targetPlant, plant2, plant3];

      expect(
        plantManagerReducer(
          { plants },
          { type: INCREMENT_PROGRESS, payload: { plantId: targetPlantId, amount: 1 } }
        )
      ).toEqual({
        plants: [
          {
            ...targetPlant,
            progress: 1,
            currentState: mapleSproutState
          },
          plant2,
          plant3
        ]
      });
    });

    it('should update all plants when INCREMENT_PROGRESS is given without a plant id', () => {
      const plant1 = makeMapleTree({ id: 'plant1' });
      const plant2 = makeMapleTree({ id: 'plant2', progress: mapleMatureState.start });
      const plant3 = makeMapleTree({ id: 'plant3', progress: mapleSproutState.start });
      const plants = [plant1, plant2, plant3];

      expect(
        plantManagerReducer({ plants }, { type: INCREMENT_PROGRESS, payload: { amount: 1 } })
      ).toEqual({
        plants: [
          {
            ...plant1,
            progress: 1,
            currentState: mapleSproutState
          },
          plant2,
          { ...plant3, progress: mapleSaplingState.start, currentState: mapleSaplingState }
        ]
      });
    });
  });
});
