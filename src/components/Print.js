import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../App";
import Textarea from "react-textarea-autosize";
import { CLAPS } from "../lib/consts";

function randomNum(number) {
  return Math.floor(Math.random() * (number - 1));
}

function clearSelection() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}

export default function Print() {
  const context = useContext(AppContext);
  const [buttonText, setButtonText] = useState("Copy text!");
  const textInput = useRef(null);
  const textMerged = `${context.input
    .toUpperCase()
    .split(" ")
    .join(
      ` ${
        context.emoji === "random"
          ? CLAPS[randomNum(CLAPS.length)]
          : context.emoji
      } `
    )} ${context.lastEmoji}`;
  return (
    <div>
      <Textarea
        ref={textInput}
        className="output"
        value={textMerged}
      ></Textarea>
      <div className="buttons-wrapper mv-5">
        <button
          onClick={() => {
            textInput.current._ref.select();
            document.execCommand("copy");
            setButtonText("Copied!");
            clearSelection();
            setTimeout(() => {
              setButtonText("Copy text!");
            }, 1000);
          }}
          className="btn btn-primary"
        >
          {buttonText}
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURI(
            textMerged
          )}&via=39strife&hashtags=sassify`}
          class="btn btn-twitter"
          data-show-count="false"
        >
          <img src={require("../assets/twitter.svg")} />
          Tweet this sass
        </a>
      </div>
    </div>
  );
}
