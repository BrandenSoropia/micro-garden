import React, { useState } from 'react';
import { START, PAUSE, CONTINUE } from './controls.constants';

// TODO: Figure out these states. Should they all be unique? Or can some be reused, like PAUSE??
const Controls = ({ onStart, onPause, onReset }) => {
  const [state, setState] = useState(PAUSE);
  const [state, setState] = useState(PAUSE);

  switch (state) {
    case PAUSE:
      return <button>START</button>;
  }

  return <div>{state === START(<button />)}</div>;
};
