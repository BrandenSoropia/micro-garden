import {
  Maple as MapleTree,
  Plant as PlantClass
} from "../plant/plant.classes";

interface IConfig {
  plants: PlantClass[];
}
const config: IConfig = {
  plants: [new MapleTree()]
};
export default config;
