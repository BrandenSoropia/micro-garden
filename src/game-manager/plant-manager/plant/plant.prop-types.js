import PropTypes from "prop-types";
import { STATUS } from "./plant.constants";

export const plantStatePropTypes = PropTypes.shape({
  start: PropTypes.number,
  end: PropTypes.number,
  status: STATUS.values,
  sprite: PropTypes.string,
  alt: PropTypes.string
});

export const plantPropTypes = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  thresholds: PropTypes.arrayOf(plantStatePropTypes),
  type: PropTypes.string,
  // Everything starts at 0
  progress: PropTypes.number,
  currentState: plantStatePropTypes
});
