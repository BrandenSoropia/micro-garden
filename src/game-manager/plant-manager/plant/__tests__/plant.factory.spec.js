import {
  getCurrentPlantState,
  makePlant,
  getSeedState,
  mapleSeedState,
  mapleSproutState,
  mapleSaplingState,
  mapleMatureState
} from '../plant.factory';
import { ABSOLUTE_SEED_STATE_PROGRESS, TREE, MAPLE_TREE } from '../plant.constants';

describe('Plant factory and helpers tests', () => {
  const thresholds = [mapleSeedState, mapleSproutState, mapleSaplingState, mapleMatureState];

  describe('makePlant tests', () => {
    it('should make a plant', () => {
      expect(
        makePlant({
          id: 'plant1',
          type: TREE,
          name: MAPLE_TREE,
          thresholds: [mapleSeedState, mapleSproutState, mapleSaplingState, mapleMatureState]
        })
      ).toEqual({
        id: 'plant1',
        name: 'Maple Tree',
        thresholds: [
          {
            start: 0,
            end: 1,
            status: 'Seed',
            sprite: 'seed.png',
            alt: 'A brown, oval shaped seed.'
          },
          {
            start: 1,
            end: 2,
            status: 'Sprout',
            sprite: 'maple-sprout.png',
            alt: 'A sparse burst of green is starting to top your little sprout.'
          },
          {
            start: 2,
            end: 3,
            status: 'Sapling',
            sprite: 'maple-sapling.png',
            alt: 'Supported by a thin, but sturdy trunk, a full head of green leaves rests.'
          },
          {
            start: 3,
            status: 'Mature',
            sprite: 'maple-mature.png',
            alt:
              'A thick trunk shoulders a dense collection of bright green leaves so thick, light barely passes through.'
          }
        ],
        type: 'TREE',
        progress: 0,
        currentState: {
          start: 0,
          end: 1,
          status: 'Seed',
          sprite: 'seed.png',
          alt: 'A brown, oval shaped seed.'
        }
      });
    });
  });

  describe('getSeedState tests', () => {
    it('should return seed state', () => {
      expect(getSeedState(thresholds)).toEqual(mapleSeedState);
    });
  });

  describe('getCurrentPlantState tests', () => {
    it('should return seed state if at ABSOLUTE_SEED_STATE_PROGRESS', () => {
      expect(
        getCurrentPlantState({
          progress: ABSOLUTE_SEED_STATE_PROGRESS,
          thresholds
        })
      ).toEqual(mapleSeedState);
    });
    it('should return max state if at max threshold', () => {
      expect(
        getCurrentPlantState({
          progress: mapleMatureState.start,
          thresholds
        })
      ).toEqual(mapleMatureState);
    });
    it('should return the state of the highest passed threshold', () => {
      expect(
        getCurrentPlantState({
          progress: mapleSproutState.start,
          thresholds
        })
      ).toEqual(mapleSproutState);
    });
  });
});
