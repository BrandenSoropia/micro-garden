import { useEffect } from 'react';

/**
 *
 * @param {any} state: state to watch
 * @param {func} setter: function to handle setting new state
 * @param {int} duration: interval in ms to perform setter
 */
export const useInterval = (state, onInterval, duration) => {
  useEffect(() => {
    const id = setInterval(() => {
      onInterval();
    }, duration);

    return () => {
      clearInterval(id);
    };
  }, [state]);
};
