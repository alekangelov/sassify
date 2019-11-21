import React from "react";

export default function Footer() {
  return (
    <footer className="wrapper">
      <p>developed under MIT licence</p>
      <p>
        by <a href="https://alekangelov.com">Alek Angelov</a>
      </p>
      <ul className="socials">
        <li>
          <a href="https://www.instagram.com/angelov.alek">
            <img src={require("../assets/instagram.svg")} />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/alekangelov">
            <img src={require("../assets/github.svg")} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alekangelov">
            <img src={require("../assets/linkedin.svg")} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/39strife">
            <img src={require("../assets/twitter-black.svg")} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
