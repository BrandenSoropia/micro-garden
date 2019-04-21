import React, { useState } from 'react';
import { START, PAUSE, CONTINUE } from './controls.constants';
import PropTypes from 'prop-types';

// TODO: Figure out these states. Should they all be unique? Or can some be reused, like PAUSE??
const Controls = ({ onStart, onPause, onReset }) => {
  const [state, setState] = useState(PAUSE);

  return <button type="button">Start</button>;
};

Controls.propTypes = {
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};
