import { INITIALIZE } from "./game-manager.types";
import { Plant as PlantClass } from "../plant/plant.classes";

interface IConfig {
  plants: PlantClass[];
}
export const initialize = (
  config: IConfig
): { type: string; payload: IConfig } => ({
  type: INITIALIZE,
  payload: config
});
