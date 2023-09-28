import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace=false) => {
    if (replace) {
      setHistory((current) => [...current.slice(0, current.length - 1)]);
    }
    setHistory((current) => [...current, newMode]);
  };

  const back = () => {
    setHistory((current) => {
      if (current.length > 1) {
        return [...current.slice(0, current.length - 1)];
      }

      return current;
    });
  };

  return { mode: history[history.length - 1], transition, back };
}
