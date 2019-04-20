import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PlantManager from './plant-manager.component';
import { selectPlants } from './plant-manager.selectors';
import { incrementProgress as _incrementProgress } from './plant-manager.action-creators';

export default connect(
  createStructuredSelector({
    plants: selectPlants
  }),
  {
    incrementProgress: _incrementProgress
  }
)(PlantManager);
