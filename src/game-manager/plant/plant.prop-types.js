import PropTypes from "prop-types";
import { TREE, STATUS } from "./plant.constants";
import { Plant } from "./plant.class";

export const plantStatePropTypes = PropTypes.shape({
  start: PropTypes.number,
  end: PropTypes.number,
  status: STATUS.values,
  sprite: PropTypes.string,
  alt: PropTypes.string
});

export const plantPropTypes = PropTypes.instanceOf(Plant);
