import React, { useState, useEffect } from "react";
import { debounce } from "debounce";

const useDebounce = ({ initialState = "" }) => {
  const [state, setState] = useState(initialState);
  const withDebounce = debounce(e => {
    setState(e.trim());
  }, 200);
  return [state, withDebounce];
};

export default function Input() {
  const [input, setInput] = useDebounce();
  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <div className="input">
      <div className="input-field">
        <input onChange={e => setInput(e.target.value)} />
      </div>
      <div className="input-select">
        <select>
          <option value="👏">👏</option>
          <option value="👏🏻">👏🏻</option>
          <option value="👏🏼">👏🏼</option>
          <option value="👏🏽">👏🏽</option>
          <option value="👏🏾">👏🏾</option>
          <option value="👏🏿">👏🏿</option>
        </select>
      </div>
      <div className="input-endwith">
        <input type="checkbox" />
      </div>
    </div>
  );
}
