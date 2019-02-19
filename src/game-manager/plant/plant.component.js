import React from "react";
import PropTypes from "prop-types";

const Plant = ({ name, sprite, alt, status }) => (
  <div>
    <p>{`${name} (${status})`}</p>
    <img src={sprite} alt={alt} />
  </div>
);

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  sprite: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Plant;
