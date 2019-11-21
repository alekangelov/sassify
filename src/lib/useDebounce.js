import { useState } from "react";
import { debounce } from "debounce";

export const useDebounce = ({ initialState = "" }) => {
  const [state, setState] = useState(initialState);
  const withDebounce = debounce(e => {
    setState(e.trim());
  }, 200);
  return [state, withDebounce];
};
