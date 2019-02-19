import React from "react";
import PropTypes from "prop-types";

const Plant = ({ type, name, sprite, alt }) => (
  <div>
    <p>{`${name}: ${type}`}</p>
    <img src={sprite} alt={alt} />
  </div>
);

Plant.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sprite: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Plant;
