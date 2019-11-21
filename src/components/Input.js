import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { CLAPS, MANICURES } from "../lib/consts";
import Textarea from "react-textarea-autosize";
export default function Input() {
  const context = useContext(AppContext);
  const setInputs = e => {
    context.set[e.target.name](e.target.value);
  };
  return (
    <div className="input">
      <div className="input-field">
        <label>Write some stuff here:</label>
        <Textarea
          onChange={setInputs}
          placeholder="Right here"
          name="input"
          id="input"
          maxLength="280"
          minRows={3}
        ></Textarea>
      </div>
      <div className="input-select">
        <label for="emoji">What kind of emoji do you want?</label>
        <select onChange={setInputs} name="emoji" id="emoji">
          {CLAPS.map(clap => (
            <option value={clap}>{clap}</option>
          ))}
          <option value="random">random</option>
        </select>
      </div>
      <div className="input-endwith">
        <label for="lastEmoji">What should I end it with?</label>

        <select onChange={setInputs} name="lastEmoji" id="lastEmoji">
          <option value="">blank</option>
          {CLAPS.map(clap => (
            <option value={clap}>{clap}</option>
          ))}
          {MANICURES.map(mani => (
            <option value={mani}>{mani}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
