import React from 'react';
import PropTypes from 'prop-types';

/**
 * Optionally contain plant. Handles planting and adding to currently planted plants.
 */
const Plot = ({ children, onEvent }) => {
  return (
    <div tabIndex="0" role="button" onClick={onEvent} onKeyDown={onEvent}>
      {children}
    </div>
  );
};

Plot.propTypes = {
  children: PropTypes.node,
  onEvent: PropTypes.func.isRequired
};

Plot.defaultProps = {
  children: null
};
